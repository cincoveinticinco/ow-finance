import { Component, OnInit } from '@angular/core';
import { BlockComponentBase } from '../../lib/block-component.base';
import { IBlockComponent } from '../../interfaces/block-component.interface';
import { IBlock } from '../../interfaces/block.interface';
import { IInputBlock } from './input-block.interface';
import { InputControl } from '../form-block/control/input-control/input-control';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBlock } from '../form-block/control/control-block/control-block';

@Component({
  selector: 'app-input-block',
  imports: [ControlBlock, ReactiveFormsModule],
  templateUrl: './input-block.html',
  styleUrl: './input-block.scss',
})
export class InputBlock extends BlockComponentBase<IInputBlock> implements OnInit, IBlockComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {    
  }
  
  load(block: IBlock): void {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.add(block);
    this.config.control_type = 'input';
  }

}
