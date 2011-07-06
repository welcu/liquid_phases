/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

// Define changes to default configuration here. For example:
// config.language = 'fr';
config.uiColor = '#F4F4F4';

config.toolbar = 'Phases';
config.toolbarCanCollapse = false;
config.toolbar_Phases = [
  ['Cut','Copy','Paste','PasteText','PasteFromWord'],
  ['Undo','Redo'],
  ['Link','Unlink'],
  ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
  ['RemoveFormat'],
  ['Source','-','About'],
  '/',
  ['Bold','Italic','Underline'],
  ['NumberedList','BulletedList'],
  ['Image','Table'],
  ['Format','Font','FontSize'],
  ['TextColor','BGColor'],
];

CKEDITOR.config.customConfig = '';
// CKEDITOR.config.skin = '';

CKEDITOR.config.tabSpaces = 2;
