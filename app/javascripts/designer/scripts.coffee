editor = document.createElement('script')
editor.type = 'text/javascript'
editor.src = '/ckeditor/ckeditor.js'

adapter = document.createElement('script')
adapter.type = 'text/javascript'
adapter.src = '/ckeditor/adapters/jquery.js'

s = document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(editor, s)
s.parentNode.insertBefore(adapter, s)
