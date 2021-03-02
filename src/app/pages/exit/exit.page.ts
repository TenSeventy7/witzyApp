import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AudioService } from '../../services/audio.service';
import { GameDataService } from '../../services/game-data.service';
import { getGameData, setGameData } from '../../services/game-storage.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
})
export class ExitPage implements OnInit {

  splashProgress: number = 0.1;
  categoryData: any;
  categoryId: any;
  completeLevelData: any;
  recievedcategoryData: any;
  currentCategoryId: any;
  currentCategoryMusic: any;
  musicEnabled: any;
  audioEnabled: any;
  jsonUrl: any;

  constructor(private navCtrl: NavController, private platform: Platform, private audio: AudioService, private gameData: GameDataService) { }

  async ngOnInit() {
    this.splashProgress = 0.1;
    this.musicEnabled = await getGameData("game_music")
    this.musicEnabled = await getGameData("game_audio")

    this.splashProgress = 0.1;
    
    this.recievedcategoryData = await this.gameData.getPersistentGameData('categoryData');
    this.currentCategoryMusic = await this.gameData.getPersistentGameData('currentCategoryMusic');
    this.currentCategoryId = await this.gameData.getPersistentGameData('currentCategoryId')
    this.categoryData =  this.recievedcategoryData.categories;
    this.splashProgress = 0.5;

    this.audio.stopBgm("game-bgm-level-screen");
    this.audio.unloadBgm("game-bgm-level-screen");
    this.audio.preloadBgm("game-bgm-current-category-"+this.currentCategoryId, this.currentCategoryMusic);
    
    for (var index = 0; index < this.categoryData.length; index++) {
      this.categoryId = this.categoryData[index].categoryId;
      await this.gameData.getGameInfo(this.categoryData[index].jsonUrl, "currentLevelData_"+this.categoryId, true);
      this.completeLevelData = await this.gameData.getUnlockedLevels(this.categoryId);
      this.gameData.setPersistentGameData("currentLevelData_"+this.categoryId, this.completeLevelData);
      this.splashProgress = this.splashProgress + 0.05
    }

    setTimeout(()=> {
      if (this.musicEnabled) {
        this.audio.playBgm("game-bgm-current-category-"+this.currentCategoryId);
      }

      this.navCtrl.navigateBack(['/levels']);
    }, 1000);
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
  
  ionViewDidLeave() {
    this.splashProgress = 0.0;
  }
}
