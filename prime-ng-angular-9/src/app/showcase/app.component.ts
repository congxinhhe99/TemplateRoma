import {
    Component,
    OnInit,
    Renderer2,
    ElementRef,
    ViewChild,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {
    trigger,
    state,
    style,
    transition,
    animate,
    AnimationEvent,
} from "@angular/animations";
import { VersionService } from "./service/versionservice";
import { MenuItem } from "primeng/api";

declare let gtag: Function;

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    animations: [
        trigger("submenu", [
            state(
                "hidden",
                style({
                    height: "0",
                    overflow: "hidden",
                    opacity: 0,
                })
            ),
            state(
                "visible",
                style({
                    height: "*",
                    opacity: 1,
                })
            ),
            transition(
                "* <=> *",
                animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
            ),
        ]),
        trigger("topbarSubmenu", [
            state(
                "void",
                style({
                    transform: "translateY(5%)",
                    opacity: 0,
                })
            ),
            state(
                "visible",
                style({
                    transform: "translateY(0)",
                    opacity: 1,
                })
            ),
            transition(
                "* <=> *",
                animate("250ms cubic-bezier(0.86, 0, 0.07, 1)")
            ),
        ]),
    ],
})
export class AppComponent implements OnInit {
    menuActive: boolean;

    activeMenuId: string;

    darkDemoStyle: HTMLStyleElement;

    routes: Array<string> = [];

    filteredRoutes: Array<string> = [];

    searchText: string;

    newsActive: boolean;

    configClick: boolean;

    configActive: boolean;

    activeSubmenus: { [key: string]: boolean } = {};

    activeTopbarSubmenu: number;

    topbarSubmenuOutsideClickListener;

    versions: any[];

    @ViewChild("topbarMenu") topbarMenu: ElementRef;
    items: MenuItem[];
    itemsNotifications: MenuItem[];
    menuSideBarFavorites: MenuItem[];
    menuSideBarUI: MenuItem[];
    menuSideBarUtilities: MenuItem[];
    menuSideBarPages: MenuItem[];
    menuSideBarbuynow: MenuItem[];
    Notifications: MenuItem[];

    constructor(
        private router: Router,
        private renderer: Renderer2,
        private versionService: VersionService
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                gtag("config", "UA-93461466-1", {
                    page_path: "/primeng" + event.urlAfterRedirects,
                });

                this.activeTopbarSubmenu = null;
                this.menuActive = false;
            }
        });

        this.versionService
            .getVersions()
            .then((data) => (this.versions = data));
    }

    ngOnInit() {
        let routes = this.router.config;
        for (let route of routes) {
            this.routes.push(
                route.path.charAt(0).toUpperCase() + route.path.substr(1)
            );
        }

        this.items = [
            {
                items: [
                    {
                        label: "Profile",
                        icon: "pi pi-user",
                    },
                    {
                        label: "Settings",
                        icon: "pi pi-cog",
                    },
                    {
                        label: "Messages",
                        icon: "pi pi-envelope",
                    },
                    {
                        label: "Notifications",
                        icon: "pi pi-bell",
                    },
                ],
            },
        ];
        this.itemsNotifications = [
            {
                items: [
                    {
                        label: "Bithika Abhedananda User interface review is done.",
                    },
                    {
                        label: "Dai Jiang Uh, we have sort of a problem here.",
                    },
                    {
                        label: "Karlien Nijhuis You apparently didn’t put the thing",
                    },
                    {
                        label: "Please check the files",
                    },
                ],
            },
        ];

        this.menuSideBarFavorites = [
            {
                label: "Dashboard",
                icon: "pi pi-fw pi-home",
            },
            //    items:[
            //       {
            //          label:'New',
            //          icon:'pi pi-fw pi-plus',
            //          items:[
            //             {
            //                label:'Bookmark',
            //                icon:'pi pi-fw pi-bookmark'
            //             },
            //             {
            //                label:'Video',
            //                icon:'pi pi-fw pi-video'
            //             },

            //          ]
            //       },
            //       {
            //          label:'Delete',
            //          icon:'pi pi-fw pi-trash'
            //       },
            //       {
            //          separator:true
            //       },
            //       {
            //          label:'Export',
            //          icon:'pi pi-fw pi-external-link'
            //       }
            //    ]
            // },
            // {
            //    label:'Edit',
            //    icon:'pi pi-fw pi-pencil',
            //    items:[
            //       {
            //          label:'Left',
            //          icon:'pi pi-fw pi-align-left'
            //       },
            //       {
            //          label:'Right',
            //          icon:'pi pi-fw pi-align-right'
            //       },
            //       {
            //          label:'Center',
            //          icon:'pi pi-fw pi-align-center'
            //       },
            //       {
            //          label:'Justify',
            //          icon:'pi pi-fw pi-align-justify'
            //       },

            //    ]
            // },
            // {
            //    label:'Users',
            //    icon:'pi pi-fw pi-user',
            //    items:[
            //       {
            //          label:'New',
            //          icon:'pi pi-fw pi-user-plus',

            //       },
            //       {
            //          label:'Delete',
            //          icon:'pi pi-fw pi-user-minus',

            //       },
            //       {
            //          label:'Search',
            //          icon:'pi pi-fw pi-users',
            //          items:[
            //             {
            //                label:'Filter',
            //                icon:'pi pi-fw pi-filter',
            //                items:[
            //                   {
            //                      label:'Print',
            //                      icon:'pi pi-fw pi-print'
            //                   }
            //                ]
            //             },
            //             {
            //                icon:'pi pi-fw pi-bars',
            //                label:'List'
            //             }
            //          ]
            //       }
            //    ]
            // },
            // {
            //    label:'Events',
            //    icon:'pi pi-fw pi-calendar',
            //    items:[
            //       {
            //          label:'Edit',
            //          icon:'pi pi-fw pi-pencil',
            //          items:[
            //             {
            //                label:'Save',
            //                icon:'pi pi-fw pi-calendar-plus'
            //             },
            //             {
            //                label:'Delete',
            //                icon:'pi pi-fw pi-calendar-minus'
            //             },

            //          ]
            //       },
            //       {
            //          label:'Archieve',
            //          icon:'pi pi-fw pi-calendar-times',
            //          items:[
            //             {
            //                label:'Remove',
            //                icon:'pi pi-fw pi-calendar-minus'
            //             }
            //          ]
            //       }
            //    ]
            // },
            // {
            //    separator:true
            // },
            // {
            //    label:'Quit',
            //    icon:'pi pi-fw pi-power-off'
            // }
        ];

        this.menuSideBarUI = [
            {
                label: "Form Layout",
                icon: "pi pi-fw pi-id-card",
                routerLink: ["formlayout"],
            },
            {
                label: "input",
                icon: "pi pi-fw pi-check-square",
                routerLink: ["input-layout"],
            },
            {
                label: "Float Label",
                icon: "pi pi-bookmark",
                routerLink: ["float-label"],
            },
            {
                label: "Invalid State",
                icon: "pi pi-exclamation-circle",
                routerLink: ["invalid-state"],
            },
            {
                label: "Button",
                icon: "pi pi-fw pi-mobile",
                routerLink: ["button"],
            },
            {
                label: "Table",
                icon: "pi pi-fw pi-table",
                routerLink: ["table"],
            },
            {
                label: "List",
                icon: "pi pi-fw pi-list",
                routerLink: ["list"],
            },
            {
                label: "Tree",
                icon: "pi pi-fw pi-share-alt",
                routerLink: ["tree"],
            },
            {
                label: "Panel",
                icon: "pi pi-fw pi-tablet",
                routerLink: ["panel"],
            },
            {
                label: "Overlay",
                icon: "pi pi-fw pi-clone",
                routerLink: ["overlaypanel"],
            },
            {
                label: "Media",
                icon: "pi pi-fw pi-image",
                routerLink: ["media"],
            },
            {
                label: "Menu",
                icon: "pi pi-fw pi-bars",
                routerLink: ["menu"],
            },
            {
                label: "Message",
                icon: "pi pi-fw pi-comment",
                routerLink: ["messages"],
            },
            {
                label: "File",
                icon: "pi pi-fw pi-file",
                routerLink: ["fileupload"],
            },
            {
                label: "Chart",
                icon: "pi pi-fw pi-chart-bar",
                routerLink: ["chart"],
            },
            {
                label: "Misc",
                icon: "pi pi-fw pi-circle-off",
                routerLink: ["misc"],
            },
        ];
        this.menuSideBarUtilities = [
            {
                label: "Display",
                icon: "pi pi-fw pi-desktop",
                routerLink: "display",
            },
            {
                label: "Elevation",
                icon: "pi pi-fw pi-external-link",
                routerLink: "elenvation",
            },
            {
                label: "FlexBox",
                icon: "pi pi-fw pi-directions",
                routerLink: "flexbox",
            },
            {
                label: "Icons",
                icon: "pi pi-fw pi-search",
                routerLink: "icons",
            },
            {
                label: "Text",
                icon: "pi pi-fw pi-search",
                routerLink: "text",
            },
            {
                label: "Widgets",
                icon: "pi pi-fw pi-star-o",
                routerLink: "widgets",
            },
            {
                label: "Grid System",
                icon: "pi pi-fw pi-th-large",
                routerLink: "grid",
            },
            {
                label: "Spacing",
                icon: "pi pi-fw pi-arrow-right",
                routerLink: "spacing",
            },
            {
                label: "Typography",
                icon: "pi pi-fw pi-align-center",
                routerLink: "typography",
            },
        ];
        this.menuSideBarPages = [
            {
                label: "Crud",
                icon: "pi pi-fw pi-pencil",
                routerLink: "crud",
            },
            {
                label: "Calendar",
                icon: "pi pi-fw pi-calendar-plus",
                routerLink: "fullcalendar",
            },
            {
                label: "Timeline",
                icon: "pi pi-fw pi-calendar",
                routerLink: "timeline",
            },
            {
                label: "Landing",
                icon: "pi pi-fw pi-globe",

                url: "https://www.primefaces.org/roma-ng/assets/pages/landing.html",
                target: "_blank",
            },
            {
                label: "Login",
                icon: "pi pi-fw pi-sign-in",
                routerLink:'login'
            },
            {
                label: "Error",
                icon: "pi pi-fw pi-exclamation-triangle",
                routerLink:'error'
            },
            {
                label: "404",
                icon: "pi pi-fw pi-times",
                url:'https://www.primefaces.org/roma-ng/#/404',
                target:'_blank'
            },
            {
                label: "Access Denied",
                icon: "pi pi-fw pi-ban",
                url:'https://www.primefaces.org/roma-ng/#/accessdenied',
                target:'_blank'

            },
            {
                label: "Empty",
                icon: "pi pi-fw pi-clone",
                url:'https://www.primefaces.org/roma-ng/#/pages/empty',
                target:'_blank'
            },
        ];
        this.menuSideBarbuynow = [
            {
                label: "Buy Now",
                icon: "pi pi-fw pi-shopping-cart",
                url:'https://www.primefaces.org/store/'
            },
            {
                label: "Documentation",
                icon: "pi pi-fw pi-info-circle",
                url:'https://www.primefaces.org/roma-ng/#/documentation'
            },
        ];
    }

    onAnimationStart(event) {
        switch (event.toState) {
            case "visible":
                event.element.style.display = "block";
                break;
        }
    }

    onAnimationDone(event) {
        switch (event.toState) {
            case "hidden":
                event.element.style.display = "none";
                break;

            case "void":
                event.element.style.display = "none";
                break;
        }
    }

    selectRoute(routeName) {
        this.router.navigate(["/" + routeName.toLowerCase()]);
        this.filteredRoutes = [];
        this.searchText = "";
    }

    filterRoutes(event) {
        let query = event.query;
        this.filteredRoutes = this.routes.filter((route) => {
            return route.toLowerCase().includes(query.toLowerCase());
        });
    }

    changeTheme(event: Event, theme: string, dark: boolean) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement>(
            document.getElementById("theme-css")
        );
        themeLink.href = "assets/components/themes/" + theme + "/theme.css";
        const hasBodyDarkTheme = this.hasClass(document.body, "dark-theme");

        if (dark) {
            if (!hasBodyDarkTheme) {
                this.addClass(document.body, "dark-theme");
            }
        } else if (hasBodyDarkTheme) {
            this.removeClass(document.body, "dark-theme");
        }

        this.activeTopbarSubmenu = null;
        event.preventDefault();
    }

    addClass(element: any, className: string) {
        if (element.classList) element.classList.add(className);
        else element.className += " " + className;
    }

    removeClass(element: any, className: string) {
        if (element.classList) element.classList.remove(className);
        else
            element.className = element.className.replace(
                new RegExp(
                    "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
                    "gi"
                ),
                " "
            );
    }

    hasClass(element: any, className: string) {
        if (element.classList) return element.classList.contains(className);
        else
            return new RegExp("(^| )" + className + "( |$)", "gi").test(
                element.className
            );
    }

    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }

    initNewsState() {
        this.newsActive = sessionStorage.getItem("primenews-hidden")
            ? false
            : true;
    }

    hideNews(event) {
        this.newsActive = false;
        sessionStorage.setItem("primenews-hidden", "true");
        event.preventDefault();
    }

    toggleSubmenu(event, name) {
        this.activeSubmenus[name] = this.activeSubmenus[name] ? false : true;
        event.preventDefault();
    }

    isSubmenuActive(name) {
        if (this.activeSubmenus.hasOwnProperty(name)) {
            return this.activeSubmenus[name];
        } else if (this.router.isActive(name, false)) {
            this.activeSubmenus[name] = true;
            return true;
        }

        return false;
    }

    bindTopbarSubmenuOutsideClickListener() {
        if (!this.topbarSubmenuOutsideClickListener) {
            this.topbarSubmenuOutsideClickListener = (event) => {
                if (this.isOutsideTopbarMenuClicked(event)) {
                    this.activeTopbarSubmenu = null;
                }
            };

            document.addEventListener(
                "click",
                this.topbarSubmenuOutsideClickListener
            );
        }
    }

    unbindTopbarSubmenuOutsideClickListener() {
        if (this.topbarSubmenuOutsideClickListener) {
            document.removeEventListener(
                "click",
                this.topbarSubmenuOutsideClickListener
            );
            this.topbarSubmenuOutsideClickListener = null;
        }
    }

    toggleTopbarSubmenu(event: Event, index: number) {
        this.activeTopbarSubmenu =
            this.activeTopbarSubmenu === index ? null : index;
        event.preventDefault();
    }

    isOutsideTopbarMenuClicked(event): boolean {
        return !(
            this.topbarMenu.nativeElement.isSameNode(event.target) ||
            this.topbarMenu.nativeElement.contains(event.target)
        );
    }

    onTopbarSubmenuAnimationStart(event: AnimationEvent) {
        switch (event.toState) {
            case "visible":
                this.bindTopbarSubmenuOutsideClickListener();
                break;

            case "void":
                this.unbindTopbarSubmenuOutsideClickListener();
                break;
        }
    }
}
