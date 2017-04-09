define(["jquery","ckeditor"],function ($,CKEDITOR) {
	//为textaera添加富文本编辑器
	CKEDITOR.replace("text-area", {
    toolBarGroups: [
    	 { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		 { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		 { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
		        '/',
		 { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		 { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] }
    ]
})

})