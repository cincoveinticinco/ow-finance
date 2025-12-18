import { AfterViewInit, Component, inject, OnInit, ViewChild } from "@angular/core";
import { LayoutComponent } from "../components/layout/lib/layout/layout";
import { LayoutCoreService } from "../components/layout/service/layout-core/layout-core.service";
import { LayoutStorageService } from "../components/layout/service/layout-storage/layout-storage.service";
import { StepBase } from "./step.base";

@Component({template: ''})
export abstract class DynamicStepBase extends StepBase {

    @ViewChild('layoutRef') layoutRef!: LayoutComponent;

    protected layoutCoreService = inject(LayoutCoreService);
    protected layoutStorageService = inject(LayoutStorageService);

    constructor() {
        super();
    }

    async ngAfterViewInit(): Promise<void> {
        try {
            await this.initView();
        } catch (error) {
            console.error(error)
        }
    }

    async initView(): Promise<void> {
        this.startLayout();
    }

    protected async startLayout(): Promise<void> {
        // await this.layoutRef.init();
        this.form = this.layoutCoreService.getForm();
    }

        
}