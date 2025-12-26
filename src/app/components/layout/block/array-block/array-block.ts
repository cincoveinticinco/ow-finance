import { Component, OnInit } from '@angular/core';
import { IBlockComponent } from '../../interfaces/block-component.interface';
import { BlockComponentBase } from '../../lib/block-component.base';
import { IArrayBlock } from './array-block.interface';
import { IBlock } from '../../interfaces/block.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBlock } from '../form-block/control/control-block/control-block';

@Component({
  selector: 'app-array-block',
  imports: [ReactiveFormsModule, ControlBlock],
  templateUrl: './array-block.html',
  styleUrl: './array-block.scss',
})
export class ArrayBlock extends BlockComponentBase<IArrayBlock> implements OnInit, IBlockComponent {


  constructor(
    // private layoutService: LayoutService
  ){
    super();
  }

  ngOnInit(): void {
      
  }

  load(block: IBlock): void {
    this.add(block);
    this.parentForm = this.controlContainer.control as FormGroup;
    this.addChildForm('array');
  }

}
