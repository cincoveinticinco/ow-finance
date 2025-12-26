import { Component, OnInit } from '@angular/core';
import { IBlock } from '../../interfaces/block.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFormBlock } from './form-block.interface';
import { IBlockComponent } from '../../interfaces/block-component.interface';
import { BlockComponentBase } from '../../lib/block-component.base';
import { ControlBlock } from './control/control-block/control-block';

@Component({
  selector: 'app-form-block',
  imports: [ReactiveFormsModule, ControlBlock],
  templateUrl: './form-block.html',
  styleUrl: './form-block.scss',
})
export class FormBlock extends BlockComponentBase<IFormBlock> implements OnInit, IBlockComponent {
  ready = false;

  constructor(
    // private layoutService: LayoutService
  ){
    super();
  }

  ngOnInit(): void {
      
  }

  // load(block: IBlock): void {
  //temp TILL form config comes from backend
  load(block: IBlock): void {
    this.add(block);
    this.parentForm = this.controlContainer.control as FormGroup;
    this.addChildForm();
    // if (!this.config.lazy) return;
    this.ready = false;
    // this.loadForm();
    //temp TILL form config comes from backend
    this.loadForm();
  }

  // private async loadForm(): Promise<void> {
  private async loadForm(): Promise<void> {
    try {
      this.ready = true;
    } catch (error) {
      console.warn(error)
    }
  }

}
