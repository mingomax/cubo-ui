(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{XBSn:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("SeAg"),e("g8ML");var u=e("g8z+"),o=["html","typescript","css"];n.PageChipComponent=function(){return function(){}}(),n.PageChipExampleComponent=function(){return function(l,n){this.codeHtml=u.highlightAuto('\n    // Single chip\n\n    <cb-chip>Default chip</cb-chip>\n\n    // Sizes\n\n    <cb-chip size="small">Small chip</cb-chip>\n    <cb-chip size="medium">Medium chip</cb-chip>\n    <cb-chip size="large">Large chip</cb-chip>\n\n    // With icons\n\n    <cb-chip size="small" icon="github">Small chip</cb-chip>\n    <cb-chip size="medium" icon="github">Medium chip</cb-chip>\n    <cb-chip size="large" icon="github">Large chip</cb-chip>\n\n    // Colors\n\n    <cb-chip color="blue">Blue chip</cb-chip>\n    <cb-chip color="green">Green chip</cb-chip>\n    <cb-chip color="orange">Orange chip</cb-chip>\n    <cb-chip color="gray-light">Gray light chip</cb-chip>\n\n    // Colors with background\n\n    <cb-chip color="blue" [bg]="true">Blue chip</cb-chip>\n    <cb-chip color="green" [bg]="true">Green chip</cb-chip>\n    <cb-chip color="orange" [bg]="true">Orange chip</cb-chip>\n    <cb-chip color="gray-light" [bg]="true">Gray light chip</cb-chip>\n\n    // Chip List - Direction: Vertical\n\n    <cb-chip-list direction="vertical">\n      <cb-chip color="blue" [bg]="true">Blue chip</cb-chip>\n      <cb-chip color="green" [bg]="true">Green chip</cb-chip>\n      <cb-chip color="orange" [bg]="true">Orange chip</cb-chip>\n      <cb-chip color="gray-light" [bg]="true">Gray light chip</cb-chip>\n    </cb-chip-list>\n\n    // Chip List - Direction: Horizontal\n\n    <cb-chip-list direction="horizontal">\n      <cb-chip color="blue" [bg]="true">Blue chip</cb-chip>\n      <cb-chip color="green" [bg]="true">Green chip</cb-chip>\n      <cb-chip color="orange" [bg]="true">Orange chip</cb-chip>\n      <cb-chip color="gray-light" [bg]="true">Gray light chip</cb-chip>\n    </cb-chip-list>',o).value,this.codeTs=u.highlightAuto("\n    import {Component} from '@angular/core';\n\n    @Component({\n      selector: 'chip-overview-example',\n      templateUrl: 'chip-overview-example.html',\n      styleUrls: ['chip-overview-example.css']\n    })\n    export class ChipOverviewExample {}\n  ",o).value,this.codeCss=u.highlightAuto("\n    /** No CSS for this example */\n  ",o).value,l.addSvgIcon("github",n.bypassSecurityTrustResourceUrl("assets/icons/github.svg")),l.addSvgIcon("twitter",n.bypassSecurityTrustResourceUrl("assets/icons/twitter.svg"))}}(),n.PageChipApiComponent=function(){return function(){this.import_content=u.highlightAuto("\n  import { CbChipModule } from 'cubo-ui';\n\n  @NgModule({\n    imports: [\n      CbChipModule\n    ]\n  })\n  export class ExampleModule { }\n  ",["nohighlight"]).value}}()},nzNL:function(l,n,e){"use strict";var u=e("LoAr"),o=e("XBSn"),i=e("NHnc"),p=e("Cuw9"),c=e("G2C9"),t=e("yKUG"),d=e("7NyU"),r=e("CZ/t"),h=e("PVb+"),a=e("WT9V"),C=e("Z5FQ"),b=e("0xYh"),m=e("YpLM"),g=e("w9fW"),s=e("rXXt"),_=e("SeAg"),R=u.\u0275crt({encapsulation:2,styles:[],data:{}});function v(l){return u.\u0275vid(0,[],null,null)}function y(l){return u.\u0275vid(0,[(l()(),u.\u0275eld(0,0,null,null,1,"page-chip",[],null,null,null,v,R)),u.\u0275did(1,49152,null,0,o.PageChipComponent,[],null,null)],null,null)}n.RenderType_PageChipComponent=R,n.View_PageChipComponent_0=v,n.View_PageChipComponent_Host_0=y,n.PageChipComponentNgFactory=u.\u0275ccf("page-chip",o.PageChipComponent,y,{},{},[]);var M=u.\u0275crt({encapsulation:2,styles:[],data:{}});function T(l){return u.\u0275vid(0,[(l()(),u.\u0275eld(0,0,null,null,137,"app-content",[],null,null,null,i.View_ContentComponent_0,i.RenderType_ContentComponent)),u.\u0275did(1,49152,null,0,p.ContentComponent,[],null,null),(l()(),u.\u0275eld(2,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.\u0275eld(3,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["cb-chip"])),(l()(),u.\u0275ted(-1,null,[" is made for using as a chip in your app."])),(l()(),u.\u0275eld(6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Single chip"])),(l()(),u.\u0275eld(8,0,null,0,2,"cb-chip",[["class","cb-chip"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(9,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],null,null),(l()(),u.\u0275ted(-1,0,["Default chip"])),(l()(),u.\u0275eld(11,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Sizes"])),(l()(),u.\u0275eld(13,0,null,0,2,"cb-chip",[["class","cb-chip"],["size","small"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(14,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{size:[0,"size"]},null),(l()(),u.\u0275ted(-1,0,["Small chip"])),(l()(),u.\u0275eld(16,0,null,0,2,"cb-chip",[["class","cb-chip"],["size","medium"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(17,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{size:[0,"size"]},null),(l()(),u.\u0275ted(-1,0,["Medium chip"])),(l()(),u.\u0275eld(19,0,null,0,2,"cb-chip",[["class","cb-chip"],["size","large"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(20,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{size:[0,"size"]},null),(l()(),u.\u0275ted(-1,0,["Large chip"])),(l()(),u.\u0275eld(22,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["With icons"])),(l()(),u.\u0275eld(24,0,null,0,2,"cb-chip",[["class","cb-chip"],["icon","github"],["size","small"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(25,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{icon:[0,"icon"],size:[1,"size"]},null),(l()(),u.\u0275ted(-1,0,["Small chip"])),(l()(),u.\u0275eld(27,0,null,0,2,"cb-chip",[["class","cb-chip"],["icon","github"],["size","medium"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(28,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{icon:[0,"icon"],size:[1,"size"]},null),(l()(),u.\u0275ted(-1,0,["Medium chip"])),(l()(),u.\u0275eld(30,0,null,0,2,"cb-chip",[["class","cb-chip"],["icon","github"],["size","large"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(31,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{icon:[0,"icon"],size:[1,"size"]},null),(l()(),u.\u0275ted(-1,0,["Large chip"])),(l()(),u.\u0275eld(33,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Colors"])),(l()(),u.\u0275eld(35,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","blue"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(36,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Blue chip"])),(l()(),u.\u0275eld(38,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","green"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(39,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Green chip"])),(l()(),u.\u0275eld(41,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","orange"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(42,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Orange chip"])),(l()(),u.\u0275eld(44,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gray-light"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(45,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gray light chip"])),(l()(),u.\u0275eld(47,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gray-lighter"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(48,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gray lighter chip"])),(l()(),u.\u0275eld(50,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","purple"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(51,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Purple chip"])),(l()(),u.\u0275eld(53,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","platinum"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(54,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Platinum chip"])),(l()(),u.\u0275eld(56,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gold"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(57,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gold chip"])),(l()(),u.\u0275eld(59,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","silver"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(60,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Silver chip"])),(l()(),u.\u0275eld(62,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","bronze"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(63,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{color:[0,"color"]},null),(l()(),u.\u0275ted(-1,0,["Bronze chip"])),(l()(),u.\u0275eld(65,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Colors with background"])),(l()(),u.\u0275eld(67,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","blue"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(68,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Blue chip"])),(l()(),u.\u0275eld(70,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","green"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(71,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Green chip"])),(l()(),u.\u0275eld(73,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","orange"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(74,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Orange chip"])),(l()(),u.\u0275eld(76,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gray-light"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(77,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gray light chip"])),(l()(),u.\u0275eld(79,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gray-lighter"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(80,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gray lighter chip"])),(l()(),u.\u0275eld(82,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","purple"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(83,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Purple chip"])),(l()(),u.\u0275eld(85,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","platinum"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(86,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Platinum chip"])),(l()(),u.\u0275eld(88,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gold"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(89,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gold chip"])),(l()(),u.\u0275eld(91,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","silver"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(92,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Silver chip"])),(l()(),u.\u0275eld(94,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","bronze"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(95,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Bronze chip"])),(l()(),u.\u0275eld(97,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Chip list"])),(l()(),u.\u0275eld(99,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),u.\u0275eld(100,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["cb-chip-list"])),(l()(),u.\u0275ted(-1,null,[" is made for creating a wrapper to use more than one "])),(l()(),u.\u0275eld(103,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["cb-chip"])),(l()(),u.\u0275ted(-1,null,[". It provides spacements between items"])),(l()(),u.\u0275eld(106,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Direction: Vertical"])),(l()(),u.\u0275eld(108,0,null,0,13,"cb-chip-list",[["direction","vertical"]],[[2,"list--h",null],[2,"list--v",null]],null,null,c.View_CbChipListComponent_0,c.RenderType_CbChipListComponent)),u.\u0275did(109,49152,null,0,t.CbChipListComponent,[],{direction:[0,"direction"]},null),(l()(),u.\u0275eld(110,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","blue"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(111,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Blue chip"])),(l()(),u.\u0275eld(113,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","green"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(114,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Green chip"])),(l()(),u.\u0275eld(116,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","orange"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(117,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Orange chip"])),(l()(),u.\u0275eld(119,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gray-light"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(120,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gray light chip"])),(l()(),u.\u0275eld(122,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Direction: Horizontal"])),(l()(),u.\u0275eld(124,0,null,0,13,"cb-chip-list",[["direction","horizontal"]],[[2,"list--h",null],[2,"list--v",null]],null,null,c.View_CbChipListComponent_0,c.RenderType_CbChipListComponent)),u.\u0275did(125,49152,null,0,t.CbChipListComponent,[],{direction:[0,"direction"]},null),(l()(),u.\u0275eld(126,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","blue"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(127,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Blue chip"])),(l()(),u.\u0275eld(129,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","green"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(130,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Green chip"])),(l()(),u.\u0275eld(132,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","orange"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(133,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Orange chip"])),(l()(),u.\u0275eld(135,0,null,0,2,"cb-chip",[["class","cb-chip"],["color","gray-light"]],[[2,"chip--bg",null],[2,"chip--icon",null]],null,null,c.View_CbChipComponent_0,c.RenderType_CbChipComponent)),u.\u0275did(136,49152,null,0,t.CbChipComponent,[u.ElementRef,u.Renderer2],{bg:[0,"bg"],color:[1,"color"]},null),(l()(),u.\u0275ted(-1,0,["Gray light chip"])),(l()(),u.\u0275eld(138,0,null,null,39,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),u.\u0275did(139,1720320,null,1,d.MatAccordion,[],null,null),u.\u0275qud(603979776,1,{_headers:1}),u.\u0275prd(2048,null,d.MAT_ACCORDION,null,[d.MatAccordion]),(l()(),u.\u0275eld(142,16777216,null,null,35,"mat-expansion-panel",[["class","panel mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],null,null,r.View_MatExpansionPanel_0,r.RenderType_MatExpansionPanel)),u.\u0275did(143,1753088,null,1,d.MatExpansionPanel,[[3,d.MAT_ACCORDION],u.ChangeDetectorRef,h.UniqueSelectionDispatcher,u.ViewContainerRef,a.DOCUMENT,[2,C.ANIMATION_MODULE_TYPE],[2,d.MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]],null,null),u.\u0275qud(335544320,2,{_lazyContent:0}),u.\u0275prd(256,null,d.MAT_ACCORDION,void 0,[]),(l()(),u.\u0275eld(146,0,null,0,4,"mat-expansion-panel-header",[["class","panel__header mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==u.\u0275nov(l,147)._toggle()&&o),"keydown"===n&&(o=!1!==u.\u0275nov(l,147)._keydown(e)&&o),o},r.View_MatExpansionPanelHeader_0,r.RenderType_MatExpansionPanelHeader)),u.\u0275did(147,180224,[[1,4]],0,d.MatExpansionPanelHeader,[d.MatExpansionPanel,u.ElementRef,b.FocusMonitor,u.ChangeDetectorRef,[2,d.MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]],null,null),u.\u0275pod(148,{collapsedHeight:0,expandedHeight:1}),u.\u0275pod(149,{value:0,params:1}),(l()(),u.\u0275ted(-1,2,[" View Code "])),(l()(),u.\u0275eld(151,0,null,1,26,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,m.View_MatTabGroup_0,m.RenderType_MatTabGroup)),u.\u0275did(152,3325952,null,1,g.MatTabGroup,[u.ElementRef,u.ChangeDetectorRef,[2,g.MAT_TABS_CONFIG]],null,null),u.\u0275qud(603979776,3,{_tabs:1}),(l()(),u.\u0275eld(154,16777216,null,null,7,"mat-tab",[["label","HTML"]],null,null,null,m.View_MatTab_0,m.RenderType_MatTab)),u.\u0275did(155,770048,[[3,4]],2,g.MatTab,[u.ViewContainerRef],{textLabel:[0,"textLabel"]},null),u.\u0275qud(335544320,4,{templateLabel:0}),u.\u0275qud(335544320,5,{_explicitContent:0}),(l()(),u.\u0275eld(158,0,null,0,3,"pre",[["class","panel__code"]],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["          "])),(l()(),u.\u0275eld(160,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.\u0275ted(-1,null,["\n        "])),(l()(),u.\u0275eld(162,16777216,null,null,7,"mat-tab",[["label","TS"]],null,null,null,m.View_MatTab_0,m.RenderType_MatTab)),u.\u0275did(163,770048,[[3,4]],2,g.MatTab,[u.ViewContainerRef],{textLabel:[0,"textLabel"]},null),u.\u0275qud(335544320,6,{templateLabel:0}),u.\u0275qud(335544320,7,{_explicitContent:0}),(l()(),u.\u0275eld(166,0,null,0,3,"pre",[["class","panel__code"]],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["          "])),(l()(),u.\u0275eld(168,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.\u0275ted(-1,null,["\n        "])),(l()(),u.\u0275eld(170,16777216,null,null,7,"mat-tab",[["label","CSS"]],null,null,null,m.View_MatTab_0,m.RenderType_MatTab)),u.\u0275did(171,770048,[[3,4]],2,g.MatTab,[u.ViewContainerRef],{textLabel:[0,"textLabel"]},null),u.\u0275qud(335544320,8,{templateLabel:0}),u.\u0275qud(335544320,9,{_explicitContent:0}),(l()(),u.\u0275eld(174,0,null,0,3,"pre",[["class","panel__code"]],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["          "])),(l()(),u.\u0275eld(176,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.\u0275ted(-1,null,["\n        "]))],function(l,n){l(n,14,0,"small"),l(n,17,0,"medium"),l(n,20,0,"large"),l(n,25,0,"github","small"),l(n,28,0,"github","medium"),l(n,31,0,"github","large"),l(n,36,0,"blue"),l(n,39,0,"green"),l(n,42,0,"orange"),l(n,45,0,"gray-light"),l(n,48,0,"gray-lighter"),l(n,51,0,"purple"),l(n,54,0,"platinum"),l(n,57,0,"gold"),l(n,60,0,"silver"),l(n,63,0,"bronze"),l(n,68,0,!0,"blue"),l(n,71,0,!0,"green"),l(n,74,0,!0,"orange"),l(n,77,0,!0,"gray-light"),l(n,80,0,!0,"gray-lighter"),l(n,83,0,!0,"purple"),l(n,86,0,!0,"platinum"),l(n,89,0,!0,"gold"),l(n,92,0,!0,"silver"),l(n,95,0,!0,"bronze"),l(n,109,0,"vertical"),l(n,111,0,!0,"blue"),l(n,114,0,!0,"green"),l(n,117,0,!0,"orange"),l(n,120,0,!0,"gray-light"),l(n,125,0,"horizontal"),l(n,127,0,!0,"blue"),l(n,130,0,!0,"green"),l(n,133,0,!0,"orange"),l(n,136,0,!0,"gray-light"),l(n,155,0,"HTML"),l(n,163,0,"TS"),l(n,171,0,"CSS")},function(l,n){var e=n.component;l(n,8,0,u.\u0275nov(n,9).bg,u.\u0275nov(n,9).icon),l(n,13,0,u.\u0275nov(n,14).bg,u.\u0275nov(n,14).icon),l(n,16,0,u.\u0275nov(n,17).bg,u.\u0275nov(n,17).icon),l(n,19,0,u.\u0275nov(n,20).bg,u.\u0275nov(n,20).icon),l(n,24,0,u.\u0275nov(n,25).bg,u.\u0275nov(n,25).icon),l(n,27,0,u.\u0275nov(n,28).bg,u.\u0275nov(n,28).icon),l(n,30,0,u.\u0275nov(n,31).bg,u.\u0275nov(n,31).icon),l(n,35,0,u.\u0275nov(n,36).bg,u.\u0275nov(n,36).icon),l(n,38,0,u.\u0275nov(n,39).bg,u.\u0275nov(n,39).icon),l(n,41,0,u.\u0275nov(n,42).bg,u.\u0275nov(n,42).icon),l(n,44,0,u.\u0275nov(n,45).bg,u.\u0275nov(n,45).icon),l(n,47,0,u.\u0275nov(n,48).bg,u.\u0275nov(n,48).icon),l(n,50,0,u.\u0275nov(n,51).bg,u.\u0275nov(n,51).icon),l(n,53,0,u.\u0275nov(n,54).bg,u.\u0275nov(n,54).icon),l(n,56,0,u.\u0275nov(n,57).bg,u.\u0275nov(n,57).icon),l(n,59,0,u.\u0275nov(n,60).bg,u.\u0275nov(n,60).icon),l(n,62,0,u.\u0275nov(n,63).bg,u.\u0275nov(n,63).icon),l(n,67,0,u.\u0275nov(n,68).bg,u.\u0275nov(n,68).icon),l(n,70,0,u.\u0275nov(n,71).bg,u.\u0275nov(n,71).icon),l(n,73,0,u.\u0275nov(n,74).bg,u.\u0275nov(n,74).icon),l(n,76,0,u.\u0275nov(n,77).bg,u.\u0275nov(n,77).icon),l(n,79,0,u.\u0275nov(n,80).bg,u.\u0275nov(n,80).icon),l(n,82,0,u.\u0275nov(n,83).bg,u.\u0275nov(n,83).icon),l(n,85,0,u.\u0275nov(n,86).bg,u.\u0275nov(n,86).icon),l(n,88,0,u.\u0275nov(n,89).bg,u.\u0275nov(n,89).icon),l(n,91,0,u.\u0275nov(n,92).bg,u.\u0275nov(n,92).icon),l(n,94,0,u.\u0275nov(n,95).bg,u.\u0275nov(n,95).icon),l(n,108,0,"horizontal"===u.\u0275nov(n,109).direction,"vertical"===u.\u0275nov(n,109).direction),l(n,110,0,u.\u0275nov(n,111).bg,u.\u0275nov(n,111).icon),l(n,113,0,u.\u0275nov(n,114).bg,u.\u0275nov(n,114).icon),l(n,116,0,u.\u0275nov(n,117).bg,u.\u0275nov(n,117).icon),l(n,119,0,u.\u0275nov(n,120).bg,u.\u0275nov(n,120).icon),l(n,124,0,"horizontal"===u.\u0275nov(n,125).direction,"vertical"===u.\u0275nov(n,125).direction),l(n,126,0,u.\u0275nov(n,127).bg,u.\u0275nov(n,127).icon),l(n,129,0,u.\u0275nov(n,130).bg,u.\u0275nov(n,130).icon),l(n,132,0,u.\u0275nov(n,133).bg,u.\u0275nov(n,133).icon),l(n,135,0,u.\u0275nov(n,136).bg,u.\u0275nov(n,136).icon),l(n,142,0,u.\u0275nov(n,143).expanded,"NoopAnimations"===u.\u0275nov(n,143)._animationMode,u.\u0275nov(n,143)._hasSpacing());var o=u.\u0275nov(n,147).panel._headerId,i=u.\u0275nov(n,147).disabled?-1:0,p=u.\u0275nov(n,147)._getPanelId(),c=u.\u0275nov(n,147)._isExpanded(),t=u.\u0275nov(n,147).panel.disabled,d=u.\u0275nov(n,147)._isExpanded(),r=l(n,149,0,u.\u0275nov(n,147)._getExpandedState(),l(n,148,0,u.\u0275nov(n,147).collapsedHeight,u.\u0275nov(n,147).expandedHeight));l(n,146,0,o,i,p,c,t,d,r),l(n,151,0,u.\u0275nov(n,152).dynamicHeight,"below"===u.\u0275nov(n,152).headerPosition),l(n,160,0,e.codeHtml),l(n,168,0,e.codeTs),l(n,176,0,e.codeCss)})}function f(l){return u.\u0275vid(0,[(l()(),u.\u0275eld(0,0,null,null,1,"page-chip-example",[],null,null,null,T,M)),u.\u0275did(1,49152,null,0,o.PageChipExampleComponent,[s.MatIconRegistry,_.DomSanitizer],null,null)],null,null)}n.RenderType_PageChipExampleComponent=M,n.View_PageChipExampleComponent_0=T,n.View_PageChipExampleComponent_Host_0=f,n.PageChipExampleComponentNgFactory=u.\u0275ccf("page-chip-example",o.PageChipExampleComponent,f,{},{},[]);var E=u.\u0275crt({encapsulation:2,styles:[],data:{}});function w(l){return u.\u0275vid(0,[(l()(),u.\u0275eld(0,0,null,null,107,"app-content",[],null,null,null,i.View_ContentComponent_0,i.RenderType_ContentComponent)),u.\u0275did(1,49152,null,0,p.ContentComponent,[],null,null),(l()(),u.\u0275eld(2,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["API reference"])),(l()(),u.\u0275eld(4,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),u.\u0275eld(5,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),u.\u0275eld(6,0,null,null,0,"code",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u.\u0275eld(7,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Directives"])),(l()(),u.\u0275eld(9,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["CbChip"])),(l()(),u.\u0275eld(11,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),u.\u0275eld(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Selector: "])),(l()(),u.\u0275eld(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["cb-chip"])),(l()(),u.\u0275eld(16,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),u.\u0275eld(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Exported as: "])),(l()(),u.\u0275eld(19,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["CbChip"])),(l()(),u.\u0275eld(21,0,null,0,57,"table",[],null,null,null,null,null)),(l()(),u.\u0275eld(22,0,null,null,56,"tbody",[],null,null,null,null,null)),(l()(),u.\u0275eld(23,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(24,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Name"])),(l()(),u.\u0275eld(26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Description"])),(l()(),u.\u0275eld(28,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(29,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["@Input() bg: boolean;"])),(l()(),u.\u0275eld(31,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Set if bg is true or false."])),(l()(),u.\u0275eld(33,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(34,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["@Input() icon: string;"])),(l()(),u.\u0275eld(36,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Set icon to chip."])),(l()(),u.\u0275eld(38,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(39,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["@Input() size: string;"])),(l()(),u.\u0275eld(41,0,null,null,9,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Size of the chip: "])),(l()(),u.\u0275eld(43,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["small"])),(l()(),u.\u0275ted(-1,null,[", "])),(l()(),u.\u0275eld(46,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["medium (default)"])),(l()(),u.\u0275ted(-1,null,[", "])),(l()(),u.\u0275eld(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["large"])),(l()(),u.\u0275eld(51,0,null,null,27,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["@Input() color: string;"])),(l()(),u.\u0275eld(54,0,null,null,24,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Color of the chip: "])),(l()(),u.\u0275eld(56,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["blue"])),(l()(),u.\u0275ted(-1,null,[", "])),(l()(),u.\u0275eld(59,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["green"])),(l()(),u.\u0275ted(-1,null,[", "])),(l()(),u.\u0275eld(62,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["orange"])),(l()(),u.\u0275ted(-1,null,[", "])),(l()(),u.\u0275eld(65,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["gray-light"])),(l()(),u.\u0275eld(67,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["gray-lighter"])),(l()(),u.\u0275eld(69,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["purple"])),(l()(),u.\u0275eld(71,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["platinum"])),(l()(),u.\u0275eld(73,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["gold"])),(l()(),u.\u0275eld(75,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["silver"])),(l()(),u.\u0275eld(77,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["bronze"])),(l()(),u.\u0275eld(79,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["CbChipList"])),(l()(),u.\u0275eld(81,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),u.\u0275eld(82,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Selector: "])),(l()(),u.\u0275eld(84,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["cb-chip-list"])),(l()(),u.\u0275eld(86,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),u.\u0275eld(87,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Exported as: "])),(l()(),u.\u0275eld(89,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["CbChipList"])),(l()(),u.\u0275eld(91,0,null,0,16,"table",[],null,null,null,null,null)),(l()(),u.\u0275eld(92,0,null,null,15,"tbody",[],null,null,null,null,null)),(l()(),u.\u0275eld(93,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(94,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Name"])),(l()(),u.\u0275eld(96,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Description"])),(l()(),u.\u0275eld(98,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),u.\u0275eld(99,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["@Input() direction: string;"])),(l()(),u.\u0275eld(101,0,null,null,6,"td",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["Direction of list: "])),(l()(),u.\u0275eld(103,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["vertical"])),(l()(),u.\u0275ted(-1,null,[", "])),(l()(),u.\u0275eld(106,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.\u0275ted(-1,null,["horizontal (default)"]))],null,function(l,n){l(n,6,0,n.component.import_content)})}function P(l){return u.\u0275vid(0,[(l()(),u.\u0275eld(0,0,null,null,1,"page-chip-api",[],null,null,null,w,E)),u.\u0275did(1,49152,null,0,o.PageChipApiComponent,[],null,null)],null,null)}n.RenderType_PageChipApiComponent=E,n.View_PageChipApiComponent_0=w,n.View_PageChipApiComponent_Host_0=P,n.PageChipApiComponentNgFactory=u.\u0275ccf("page-chip-api",o.PageChipApiComponent,P,{},{},[])},ov3H:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.PageChipModule=function(){return function(){}}()},sDEL:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("981U");var u=e("XBSn");n.PageChipRoutes=[{path:"",component:u.PageChipExampleComponent,outlet:"example"},{path:"",component:u.PageChipApiComponent,outlet:"api"},{path:"",component:u.PageChipComponent}],n.PageChipRouting=function(){return function(){}}()},xEKS:function(l,n,e){"use strict";var u=e("LoAr"),o=e("ov3H"),i=e("C9Ky"),p=e("nzNL"),c=e("WT9V"),t=e("SPdK"),d=e("y7gG"),r=e("981U"),h=e("sDEL"),a=e("C7Lb"),C=e("UelK"),b=e("WgBV"),m=e("LxDK"),g=e("V7OE"),s=e("LYzL"),_=e("SeAg"),R=e("abkR"),v=e("WV+C"),y=e("0xYh"),M=e("w9fW"),T=e("5neO"),f=e("7NyU"),E=e("PCNd"),w=e("rXXt"),P=e("DuLo"),x=e("PODb"),V=e("XBSn");n.PageChipModuleNgFactory=u.\u0275cmf(o.PageChipModule,[],function(l){return u.\u0275mod([u.\u0275mpd(512,u.ComponentFactoryResolver,u.\u0275CodegenComponentFactoryResolver,[[8,[i.\u0275EmptyOutletComponentNgFactory,p.PageChipExampleComponentNgFactory,p.PageChipApiComponentNgFactory,p.PageChipComponentNgFactory]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u.\u0275mpd(4608,c.NgLocalization,c.NgLocaleLocalization,[u.LOCALE_ID,[2,c.\u0275angular_packages_common_common_a]]),u.\u0275mpd(5120,u.APP_BOOTSTRAP_LISTENER,function(l,n){return[t.removeStyles(l,n)]},[c.DOCUMENT,u.PLATFORM_ID]),u.\u0275mpd(4608,d.MutationObserverFactory,d.MutationObserverFactory,[]),u.\u0275mpd(1073742336,c.CommonModule,c.CommonModule,[]),u.\u0275mpd(1073742336,r.RouterModule,r.RouterModule,[[2,r.\u0275angular_packages_router_router_a],[2,r.Router]]),u.\u0275mpd(1073742336,h.PageChipRouting,h.PageChipRouting,[]),u.\u0275mpd(1073742336,t.CoreModule,t.CoreModule,[]),u.\u0275mpd(1073742336,a.BidiModule,a.BidiModule,[]),u.\u0275mpd(1073742336,C.FlexModule,C.FlexModule,[]),u.\u0275mpd(1073742336,b.ExtendedModule,b.ExtendedModule,[]),u.\u0275mpd(1073742336,m.GridModule,m.GridModule,[]),u.\u0275mpd(1073742336,g.FlexLayoutModule,g.FlexLayoutModule,[[2,t.SERVER_TOKEN],u.PLATFORM_ID]),u.\u0275mpd(1073742336,s.MatCommonModule,s.MatCommonModule,[[2,s.MATERIAL_SANITY_CHECKS],[2,_.HAMMER_LOADER]]),u.\u0275mpd(1073742336,R.PortalModule,R.PortalModule,[]),u.\u0275mpd(1073742336,v.PlatformModule,v.PlatformModule,[]),u.\u0275mpd(1073742336,s.MatRippleModule,s.MatRippleModule,[]),u.\u0275mpd(1073742336,d.ObserversModule,d.ObserversModule,[]),u.\u0275mpd(1073742336,y.A11yModule,y.A11yModule,[]),u.\u0275mpd(1073742336,M.MatTabsModule,M.MatTabsModule,[]),u.\u0275mpd(1073742336,T.CdkAccordionModule,T.CdkAccordionModule,[]),u.\u0275mpd(1073742336,f.MatExpansionModule,f.MatExpansionModule,[]),u.\u0275mpd(1073742336,E.SharedModule,E.SharedModule,[]),u.\u0275mpd(1073742336,w.MatIconModule,w.MatIconModule,[]),u.\u0275mpd(1073742336,P.CbChipModule,P.CbChipModule,[]),u.\u0275mpd(1073742336,x.ContentModule,x.ContentModule,[]),u.\u0275mpd(1073742336,o.PageChipModule,o.PageChipModule,[]),u.\u0275mpd(1024,r.ROUTES,function(){return[[{path:"",component:V.PageChipExampleComponent,outlet:"example"},{path:"",component:V.PageChipApiComponent,outlet:"api"},{path:"",component:V.PageChipComponent}]]},[])])})}}]);