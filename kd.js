		

browserObject = { 
			
			checkSupportFor : function (){
			var tagname = arguments[0];
			console.log("argument recieved : "+tagname);
			if (document.createElement(tagname).placeholder == undefined) {
					return false;
				}
				else
				{return true;}
			},
			platform : navigator.platform,
			language : navigator.language,
			IsJavaEnabled : function (){return navigator.javaEnabled();},
			hasCanvasSupport : 
			function()
			{
			var test_canvas = document.createElement("canvas"); 
			 return (test_canvas.getContext) ?  true :  false;
			},
			
			hasAudioSupport : 	function()
			{
			 test_audio= document.createElement("audio"); 
			 return (test_audio.play)? true : false
			},
			hasVideoSupport : function()
			{
			 test_video= document.createElement("video"); 
			 return (test_video.play)? true : false
			},
			hasDragDropSupport : function(){
			if('draggable' in document.createElement('span')) {
				return true;
				}
				else{return false;}
			},
			hasPlaceHolderSupport : function ()
			{
				return this.checkSupportFor("input");
				
			},
			hasEmbedSupport : function()
			{
			return this.checkSupportFor("embed");
			},
			hasDataListSupport : function()
			{
				return ('options' in document.createElement('datalist')) ;
			}
			};

			
kd = {browser : browserObject}