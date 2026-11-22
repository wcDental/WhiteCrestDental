
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { WhatsappFloatComponent } from './components/shared/whatsapp-float/whatsapp-float.component';
import { MobileNavComponent } from './components/core/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappFloatComponent, MobileNavComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
