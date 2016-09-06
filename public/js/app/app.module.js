"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms'); //added for Hero app (8/15/2016)
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxzQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLGdDQUFnQztBQVNoRiw4QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQWVoRDtJQUFBO0lBQXlCLENBQUM7SUFaMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQU87Z0JBQ2IsZ0NBQWE7Z0JBQ2IsbUJBQVc7YUFDVjtZQUNGLFlBQVksRUFBRTtnQkFDYiw0QkFBWTthQUNYO1lBQ0YsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxTQUFTLEVBQUssQ0FBRSw0QkFBWSxDQUFFO1NBQy9CLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJzsgLy9hZGRlZCBmb3IgSGVybyBhcHAgKDgvMTUvMjAxNilcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuXG4vKiAgREVWLU1PREUgaW4tbWVtb3J5IHdlYiBBUElcbiovXG4vLyBJbXBvcnRzIGZvciBsb2FkaW5nICYgY29uZmlndXJpbmcgdGhlIGluLW1lbW9yeSB3ZWIgYXBpXG5pbXBvcnQgeyBYSFJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgWyBcbiAgXHRCcm93c2VyTW9kdWxlLFxuICBcdEZvcm1zTW9kdWxlLCBcbiAgXHRdLCBcbiAgZGVjbGFyYXRpb25zOiBbIFxuICBcdEFwcENvbXBvbmVudFxuICBcdF0sXG4gIHByb3ZpZGVyczogWyAgICBcbiAgXSxcbiAgYm9vdHN0cmFwOiAgICBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
