/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	config.uiColor = '#FF0000';
	config.toolbar = 'Phases';
  config.toolbarCanCollapse = false;
	config.toolbar_Phases = [
    ['Cut','Copy','Paste','PasteText','PasteFromWord'],
    ['Undo','Redo'],
    ['Link','Unlink'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    ['RemoveFormat'],
    ['Source'],
    '/',
    ['Bold','Italic','Underline'],
    ['NumberedList','BulletedList'],
    ['Image','Table'],
    ['Format','Font','FontSize'],
    ['TextColor']
  ];

	config.tabSpaces = 4;

};
