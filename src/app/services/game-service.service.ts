import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }


  questionsChapter1 = [
    {
		"questionScore": 150,
		"questionText": "Who named the Philippines?",
		"solutionText": "Lopez de Villalobos was commissioned in 1541 by the Viceroy of New Spain, Antonio de Mendoza, who was the first colonial administrator in the New World, to send an expedition to the Islas del Poniente, meaning Islands of the West, now known as the Philippines.",
		"hintText": "He gave the name ¡°Las Islas Filipinas¡± to the Philippine archipelago in 1543.",
		"answers": [
		  {
			"answer": "Ruy Lopez de Villalobos",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Ferdinand Magellan",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "King Phillip II",
			"correct": false,
			"selected": false
		  }
		]
	  },
	  {
		"questionScore": 100,
		"questionText": "The National Hero of the Philippines",
		"solutionText": "Jose Rizal became the National Hero of the Philippines not only because of his genius, his multiple talents but because of his unquenchable love of the Philippines.",
		"hintText": "Fought with a pen.",
		"answers": [
		  {
			"answer": "Jose Rizal",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Jose P. Rizal",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Jose Protacio Rizal Mercado Alonzo y Realonda",
			"correct": false,
			"selected": false
		  }
		]
	  },
	  {
		"questionScore": 70,
		"questionText": "Riddle: What has to be broken before you can use it?",
		"solutionText": "",
		"hintText": "The letter A and B is wrong, so the correct answer is either C or D.",
		"answers": [
		  {
			"answer": "Egg",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Glass",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Mirror",
			"correct": false,
			"selected": false
		  }
		]
	  },
	  {
		"questionScore": 70,
		"questionText": "Riddle: I’m tall when I’m young, and I’m short when I’m old. What am I?",
		"solutionText": "",
		"hintText": "Used In funeral.",
		"answers": [
		  {
			"answer": "Candle",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Tree",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Money",
			"correct": false,
			"selected": false,
			"": {}
		  }
		]
	  },
	  {
		"questionScore": 150,
		"questionText": "Who is the author of The Origin Of Species?",
		"solutionText": "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin that is considered to be the foundation of evolutionary biology.",
		"hintText": "Proposed the theory of Evolution.",
		"answers": [
		  {
			"answer": "Charles Darwin",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "George Louis Leclerc",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Charles Dickens",
			"correct": false,
			"selected": false,
			"": {}
		  }
		]
	  },
	  {
		"questionScore": 200,
		"questionText": "How many stars does the American Flag have?",
		"solutionText": "The 50 stars on the flag represent the 50 states of the United States of America",
		"hintText": "It represent the states of the United States of America",
		"answers": [
		  {
			"answer": "50",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "49",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "60",
			"correct": false,
			"selected": false,
			"": {}
		  }
		]
	  },
	  {
		"questionScore": 275,
		"questionText": "Who is the Goddess of Wisdom and War?",
		"solutionText": "Athena the Goddess of wisdom, war and the crafts, and favourite daughter of Zeus.",
		"hintText": "The favorite daughter of Zeus.",
		"answers": [
		  {
			"answer": "Athena",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Aphrodite",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Minerva",
			"correct": false,
			"selected": false,
			"": {}
		  }
		]
	  },
	  {
		"questionScore": 250,
		"questionText": "What is Neil Armstrong's Nationality?",
		"solutionText": "He was an American astronaut and aeronautical engineer, and the first person to walk on the Moon.",
		"hintText": "He is from Wapakoneta, Ohio, U.S. Cincinnati, Ohio, U.S.",
		"answers": [
		  {
			"answer": "American",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Australian",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Belgian",
			"correct": false,
			"selected": false,
			"": {}
		  }
		]
	  },
	  {
		"questionScore": 400,
		"questionText": "Henry the Eighth had how many wives?",
		"solutionText": "Henry VIII is best known for his six wives, and several mistresses he kept on the side.",
		"hintText": "He had more than 5 wives",
		"answers": [
		  {
			"answer": "Six",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Seven",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Eight",
			"correct": false,
			"selected": false,
			"": {}
		  }
		]
	  },
	  {
		"questionScore": 600,
		"questionText": "People of which religion consider ‘The Bhagavad Gita’ as their sacred text?",
		"solutionText": "Bhagavat Gita is the most important religious texts of Hinduism and easily the best known.",
		"hintText": "It is the world's third-largest religion.",
		"answers": [
		  {
			"answer": "Hinduism",
			"correct": true,
			"selected": false
		  },
		  {
			"answer": "Buddhism",
			"correct": false,
			"selected": false
		  },
		  {
			"answer": "Shintoism",
			"correct": false,
			"selected": false
		  }
		]
	  }
  ]
  
  questionsChapter2 = [
		{
      "questionText": "C'est quoi l'hélico",
      "selected": false,
			"answers": [
				{"answer": "Helicopter", "correct": true, "selected": false},
				{"answer": "Plane", "correct": false, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		},
		{
      "questionText": "Quel est le plus gros gars sur",
      "selected": false,
			"answers": [
				{"answer": "Fouad", "correct": false, "selected": false},
				{"answer": "Conan", "correct": false, "selected": false},
				{"answer": "Safare", "correct": true, "selected": false}
			]
		},
		{
      "questionText": "LALALALA LA LA AAAALALALALALALALA LA LALALALA LA LAAAAAAAAA",
      "selected": false,
			"answers": [
				{"answer": "Conan", "correct": true, "selected": false},
				{"answer": "Shrek", "correct": false, "selected": false},
				{"answer": "Truck", "correct": false, "selected": false}
			]
		}

	]
}
