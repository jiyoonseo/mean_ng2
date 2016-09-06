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
var AppComponent = (function () {
    function AppComponent() {
        this.message = {
            content: "a Message :D",
            author: 'Jseo'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n    <div class=\"container-fluid\">\n    \t<div class=\"row\">\n    \t\t<input [(ngModel)]=\"message.content\" />\n\t\t\t\n    \t</div>\n        <div class=\"row\">\n        \t<div class=\"list-group\">\n\t\t\t\t<a href=\"#\" class=\"list-group-item list-group-item-action\">\n\t\t\t\t\t{{ message.content }}\n\t\t\t\t</a>\n\t\t\t\t<footer class=\"list-group-item list-group-item-action\">\n\t\t\t\t\t<div class=\"author\">\n\t\t\t\t\t\t{{ message.author }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"config\"> \n\t\t\t\t\t\t<a href='#'>Edit</a>\n\t\t\t\t\t\t<a href='#'>Delete</a>\n\t\t\t\t\t</div>\n\t\t\t\t</footer>\n\t\t\t</div>\n\n\t\t\t\n        </div>\n        \n    </div>\n    ",
            styles: ["\n\t.author {\n\t\tdisplay: inline-block;\n\t\tfont-style: italic;\n\t\tfont-size: 12px;\n\t\twidth: 80%;\n\t}\n\t.config {\n\t\tdisplay: inline-block;\n\t\ttext-aligh: right;\n\t\tfont-size: 12px;\n\t\twidth: 19%;\n\t}\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQStDMUM7SUFBQTtRQUNDLFlBQU8sR0FBRztZQUNULE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE1BQU0sRUFBRSxNQUFNO1NBQ2QsQ0FBQztJQUVILENBQUM7SUFuREQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGtyQkEwQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxxT0FjUixDQUFDO1NBQ0wsQ0FBQzs7b0JBQUE7SUFPRixtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQVksZUFNeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHRcdDxpbnB1dCBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UuY29udGVudFwiIC8+XG5cdFx0XHRcbiAgICBcdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIFx0PGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cblx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCI+XG5cdFx0XHRcdFx0e3sgbWVzc2FnZS5jb250ZW50IH19XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PGZvb3RlciBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxuXHRcdFx0XHRcdFx0e3sgbWVzc2FnZS5hdXRob3IgfX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+IFxuXHRcdFx0XHRcdFx0PGEgaHJlZj0nIyc+RWRpdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnPkRlbGV0ZTwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2Bcblx0LmF1dGhvciB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0d2lkdGg6IDgwJTtcblx0fVxuXHQuY29uZmlnIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dGV4dC1hbGlnaDogcmlnaHQ7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdHdpZHRoOiAxOSU7XG5cdH1cblxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdG1lc3NhZ2UgPSB7XG5cdFx0Y29udGVudDogXCJhIE1lc3NhZ2UgOkRcIixcblx0XHRhdXRob3I6ICdKc2VvJ1xuXHR9O1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
