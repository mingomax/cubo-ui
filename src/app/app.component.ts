import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core'
import * as hljs from 'highlight.js';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <header class="header">
      <a class="header__logo">
        Cubo<span class="header__logo--color-1">U</span><span class="header__logo--color-2">I</span>
      </a>
    </header>
    <main class="main">
      <div class="container">
        <nav class="navbar">
          <mat-nav-list class="nav-list">
            <a mat-list-item routerLink="/avatar" [routerLinkActive]="['navbar--active']" [routerLinkActiveOptions]="{exact: true}">Avatar</a>
            <mat-divider></mat-divider>
            <a mat-list-item>Card</a>
            <mat-divider></mat-divider>
            <a mat-list-item>Social</a>
          </mat-nav-list>
        </nav>
        <article class="content">
          <mat-tab-group>
            <mat-tab label="Example">
              <mat-card-content class="tab-content">
                <article class="description">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                    id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";
                  </p>
                </article>

                <mat-accordion>
                  <mat-expansion-panel>
                    <mat-expansion-panel-header class="panel__header">
                      View Code
                    </mat-expansion-panel-header>
                    <mat-tab-group>
                      <mat-tab label="HTML">
                        <pre class="code">
                          <code [innerHtml]="html_content"></code>
                        </pre>
                      </mat-tab>
                      <mat-tab label="TS">
                        <pre class="code">
                          <code [innerHtml]="ts_content"></code>
                        </pre>
                      </mat-tab>
                      <mat-tab label="CSS">
                        <pre class="code">
                          <code [innerHtml]="css_content"></code>
                        </pre>
                      </mat-tab>
                    </mat-tab-group>
                  </mat-expansion-panel>
                </mat-accordion>

                <div class="render">
                  <mat-card>
                      <mat-chip-list>
                        <mat-chip>One fish</mat-chip>
                        <mat-chip>Two fish</mat-chip>
                        <mat-chip color="primary" selected="true">Primary fish</mat-chip>
                        <mat-chip color="accent" selected="true">Accent fish</mat-chip>
                      </mat-chip-list>
                  </mat-card>
                </div>

              </mat-card-content>
            </mat-tab>
            <mat-tab label="API">
              <article class="api">
                <h2 class="api__header">
                  API reference for Cubo Avatar
                </h2>
                <pre class="api__code">
                  <code [innerHtml]="import_content"></code>
                </pre>
                <h2 class="api__subtitle">
                  Directives
                </h2>
                <h3 class="api__component">
                  CbAvatar
                </h3>
                <article class="description">
                  <p>Service to open Material Design modal dialogs.</p>
                  <br>
                  <p>While this component can be used alone, it also provides a number of preset styles for common card sections, including:</p>
                </article>
                <div class="description">
                  <p>
                    <span>Selector: </span>
                    <span class="api__code api__selector">mat-card</span>
                  </p>
                  <p>
                    <span>Exported as: </span>
                    <span class="api__code api__selector">matCard</span>
                  </p>
                </div>
              </article>
            </mat-tab>
          </mat-tab-group>
        </article>
      </div>
    </main>
  `
})
export class AppComponent {
  languages = ['html', 'typescript', 'css'];
  html_content = hljs.highlightAuto(`
    <mat-chip-list>
      <mat-chip>One fish</mat-chip>
      <mat-chip>Two fish</mat-chip>
      <mat-chip color="primary" selected="true">Primary fish</mat-chip>
      <mat-chip color="accent" selected="true">Accent fish</mat-chip>
    </mat-chip-list>`
    , this.languages).value;

  css_content = hljs.highlightAuto(`
    @font-face {
      font-family: Chunkfive; src: url('Chunkfive.otf');
    }

    body, .usertext {
      color: #F0F0F0; background: #600;
      font-family: Chunkfive, sans;
    }

    @import url(print.css);
    @media print {
      a[href^=http]::after {
        content: attr(href)
      }
    })`, this.languages).value;

  ts_content = hljs.highlightAuto(`
    import {Component} from '@angular/core';

    /**
     * @title Basic expansion panel
     */
    @Component({
      selector: 'expansion-overview-example',
      templateUrl: 'expansion-overview-example.html',
      styleUrls: ['expansion-overview-example.css'],
    })
    export class ExpansionOverviewExample {
      panelOpenState: boolean = false;
    }`, this.languages).value;

  import_content = hljs.highlightAuto(`
    import {MatButtonModule} from '@angular/material/button';`, ['nohighlight']).value;
}
