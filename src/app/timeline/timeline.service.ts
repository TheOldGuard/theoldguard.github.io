import { Injectable } from '@angular/core';

import { Age } from './age';

@Injectable()
export class TimelineService {
    private ages = AGES();

    getAges(): Promise<Age[]> {
        return Promise.resolve(this.ages);
    }
}

function AGES(): Age[] {
  return [
      {
        title: "Age of Dawn",
        description: "Little is known about the Age of Dawn with any degree of certainty. Because the intelligent races of Kalemin had not yet been created at the beginning of the age, and had not developed written language by the end, most of the history from this period comes from the oral tradition of the church of Illdar. The information herein is dogmatic and should be thus considered with a skeptical mind.",
        blocks: [
          {
            title: 'Kalemiel creates The Mantle',
            content: ['Kalemiel, father of the gods, was alone in the void. He poured a measure of his essence into the emptiness and from it formed The Mantle, the place in which the planes reside.'],
            type: 'religious-event',
            date: 'Date unknown'
          },
          {
            title: 'Kalemiel creates the gods',
            content: [
              'Having made a place in which things could exist, Kalemiel found himself lonely. Giving up more of his essence, he created others like himself. To each, he bestowed a small part of his vast intellect and personality.',
              'After spending some time simply enjoying the company of his children, he taught them to create new things of their own.'
            ],
            type: 'religious-event',
            date: 'Date unknown'
          },
          {
            title: 'Gods create the first planes',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'As any child will do when given new blocks with which to build, the children of Kalemiel set forth making realms of their own, each to his or her own taste. Due to the youth and inexperience of the creators, these planes were simplistic and largely empty.',
              'Kalemiel let his children play for a time.'
            ]
          },
          {
            title: 'Gods refine planes',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'The father of the gods worked with each of his children, helping them discover what form they wanted their realm to have. Under the father\'s guidance, each shaped their plane to fit his or her core values and desires.',
              'Kalemiel watched his children work for a time.'
            ]
          },
          {
            title: 'Cooperation and discord are born',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'Kalemiel was impressed with the progress his children had made, and marvelled at their creations. Individually, they were becoming skilled at the art of creation.',
              'However, he had formed them from pieces of himself, and so wished to see what they could make as a whole. He set them to work creating a central realm in which they would all have influence and input. They labored long at the task, but problems began to develop. Some wanted to jump right in and start making. Others felt it would be best to make a comprehensive plan. Still others wanted nothing to do with the whole, and instead wished to focus their efforts on personal projects.',
              'In the end, this first attempt was a failure and was abandoned half-formed.'
            ]
          },
          {
            title: 'Kalemin is created',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'The gods could feel Kalemiel\'s displeasure and disapointment at their bickering, as well as their failure. They came together and agreed to cooperate fully. They made compromises and chose a leader among themselves. This leader delegated tasks according to the ability of the others.',
              'They first laid out a plan. This plan was detailed in some areas, yet loose in others to satisfy the more creative and impulsive of them. Those who were more solitary were given whole areas or systems to create, while those who were more social tackled parts of the project together.',
              'The gods were far older and even moreso mature when their realm was complete. In honor of the father who had given them life, they named the world "Kalemin."'
            ]
          },
          {
            title: 'Plants and animals populate the realm',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'Though the gods were pleased with Kalemin\'s topography and material content, it seemed empty. So they conferred among themselves and concluded that there should be things which grow, and move to give it character. A few of them took the task of creating plants and beasts upon themselves, and together they filled the world with life.',
              'Kalemiel watched his children with pride and judged them ready to begin their final task.'
            ]
          },
          {
            title: 'First sentient mortals are born',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'Kalemiel was most pleased to see how far his children had come since their first clumsy attempts at their own realms. He watched the sea teem with fish, and marvelled at the grace with which the birds soared in the sky. He delighted in the beasts of land and tree and deep in the earth, and the plants swaying in the breeze. Even the icy wastes of the north were full of life.',
              'He gathered his sons and daughters together and posed a question to them: "What is missing?"',
              'They sat silent for a moment, wondering what thing they had left out. They were many, so surely they couldn\'t have overlooked anything! Then one spoke up. "Father," he said, "when you were alone in the void, you made us. You gave us gifts and set us apart from that which you created before." He waved his hand toward Kalemin. "The plants and beasts are many and unique, but there are yet no creatures with the understanding to appreciate the world which we have made. That is what is missing."',
              'The father of the gods was pleased and nodded.',
              'And so they made the first intelligent creatures in a form similar to their own. It was a race with great potential for thought, planning, and creativity, for they gave of their own gifts for it to be so.'
            ]
          },
          {
            title: 'Kalemiel departs',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'Shortly after the creation of intelligent life, Kalemiel left The Mantle and all in it behind, confidently entrusting his children with that which they had created. Some believe he gave up the last of his essence to imbue the mortals with cunning and wisdom. Others claim that he will return on the last day and judge the realms.',
              'Though the stories vary wildly on how this came to be, or what became of him, all agree that he has been gone since the dawn of sentience.'
            ]
          },
          {
            title: 'The races diverge',
            type: 'religious-event',
            date: 'Date unknown',
            content: [
              'Over the course of an unknown length of time, this race spread across the lands of Kalemin. Some chose to reside deep within the forests, others chose to live upon the great mountains. Still others adapted to living beneath the waves, while yet others chose to live in the deep places below the earth. The gods, wishing to help their highest creations thrive, made changes to the forms of these disparate groups, fitting them to the environments in which they lived.',
              'The gods were pleased.'
            ]
          }
        ]
      }, {
        title: 'Age of the Divines',
        description: "According to legends from this time, the gods once walked the earth alongside their mortal creations. Writing was only first used near the end of this age, so the dates are approximate at best. Much of what we know from this age comes from the oral histories of the Eldaani tribes, the peoples from whom elves are descended.",
        blocks: [
          {
            title: 'Placeholder',
            type: 'religious-event',
            date: 'Year 7',
            content: [
              'To be added later'
            ]
          }
        ]
      }
  ];

}
