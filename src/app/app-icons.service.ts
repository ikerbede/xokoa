import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @title SVG icons
 */
@Injectable({
  providedIn: 'root'
})
export class AppIconsService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
    iconRegistry.addSvgIcon(
      'access_time',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/access_time.svg'));
    iconRegistry.addSvgIcon(
      'build',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/build.svg'));
    iconRegistry.addSvgIcon(
      'casino',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/casino.svg'));
    iconRegistry.addSvgIcon(
      'check_box',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_box.svg'));
    iconRegistry.addSvgIcon(
      'check_box_outline_blank',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_box_outline_blank.svg'));
    iconRegistry.addSvgIcon(
      'cancel',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cancel.svg'));
    iconRegistry.addSvgIcon(
      'contact_support',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/contact_support.svg'));
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
    iconRegistry.addSvgIcon(
      'glasses',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/glasses.svg'));
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
    iconRegistry.addSvgIcon(
      'keyboard_arrow_left',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/keyboard_arrow_left.svg'));
    iconRegistry.addSvgIcon(
      'keyboard_arrow_right',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/keyboard_arrow_right.svg'));
    iconRegistry.addSvgIcon(
      'location_on',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/location_on.svg'));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
    iconRegistry.addSvgIcon(
      'my_location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/my_location.svg'));
    iconRegistry.addSvgIcon(
      'phone',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
    iconRegistry.addSvgIcon(
      'school',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/school.svg'));
    iconRegistry.addSvgIcon(
      'sunglasses',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sunglasses.svg'));
    iconRegistry.addSvgIcon(
      'verified_user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/verified_user.svg'));
    iconRegistry.addSvgIcon(
      'visibility',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/visibility.svg'));
    iconRegistry.addSvgIcon(
      'watch_later',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/watch_later.svg'));
  }
}
