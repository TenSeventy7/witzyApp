import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { GameDataService } from '../../services/game-data.service';
import { getGameData, setGameData } from '../../services/game-storage.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  splashProgress: number = 0.1;
  categoryData: any;
  categoryId: any;
  completeLevelData: any;
  musicEnabled: boolean;
  audioEnabled: boolean;
  currentCategoryId: any;
  jsonUrl: any;
  currentLevel: any;

  questionData: any
  lastGameScore: any;
  totalPossibleScore: number = 0;
  roundStar1Requirement: number = 0;
  roundStar2Requirement: number = 0;
  roundStar3Requirement: number = 0;

  constructor(private router: Router, private platform: Platform, private audio: AudioService, private gameData: GameDataService) { }

  ngOnInit() {
    this.splashProgress = 0.1;
  }

  calculateRequiredStars() {
    // Calculate the scores needed based on the total possible score.
    for (var index = 0; index < this.questionData.length; index++) {
      // Get total score based on question index
      var questionScore: number = this.questionData[index].questionScore;
      this.totalPossibleScore = this.totalPossibleScore + questionScore;
      this.splashProgress = this.splashProgress + 0.05;
    }
    
    this.roundStar1Requirement = Math.round(this.totalPossibleScore / 3); // Divide total score by three
    this.roundStar2Requirement = Math.round(this.roundStar1Requirement * 2); // Multiply first star requirement by 2
    this.roundStar3Requirement = Math.round((this.totalPossibleScore / 4.75) + this.roundStar2Requirement); // Divide total score by three, then add first star requirement

    this.gameData.setGameData('roundStar1Requirement', this.roundStar1Requirement)
    this.gameData.setGameData('roundStar2Requirement', this.roundStar2Requirement)
    this.gameData.setGameData('roundStar3Requirement', this.roundStar3Requirement)
  }

  preloadAudio(key: string, file: string) {
    this.audio.preload(key, file);
    this.splashProgress = this.splashProgress + 0.025
  }

  ionViewWillEnter() {
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log("Back disabled.")
    });
  }

  async ionViewDidEnter() {
    this.currentCategoryId = await this.gameData.getPersistentGameData('currentCategoryId')
    this.splashProgress = 0.1;

    this.audio.stopBgm("game-bgm-current-category-"+this.currentCategoryId);
    this.audio.unloadBgm("game-bgm-current-category-"+this.currentCategoryId);
    this.audio.preloadBgm("game-bgm-level-screen", '/assets/music/game_bgm_level_screen.ogg');
    
    this.jsonUrl = await this.gameData.getGameData('levelJsonData');
    this.currentLevel = await this.gameData.getGameData('currentLevelNumber');
    this.lastGameScore = await this.gameData.getScoreInfo(this.currentCategoryId, this.currentLevel);
    this.splashProgress = 0.5;

    await this.gameData.getGameInfo(this.jsonUrl, 'currentQuestionsData', false);

    this.gameData.setGameData('lastGameScore', this.lastGameScore)
    this.questionData = await this.gameData.getGameData('currentQuestionsData').questions
    this.calculateRequiredStars();
    this.splashProgress = 0.8;

    setTimeout(()=> {
      this.router.navigate(['/game']);
    }, 1500);
  }

  ionViewDidLeave() {
    this.splashProgress = 0.0;
  }
}
