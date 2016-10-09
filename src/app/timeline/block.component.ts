import { Component, Input } from '@angular/core';

import { Block } from './block';

@Component({
    selector: 'timeline-block',
    templateUrl: './block.component.html'
})
export class BlockComponent {
    @Input() block: Block;
}
