var lazierLoadAutoHook=true;var lazierLoadDefaultOptions={treshold:100,extensions:["gif","png","jpg","jpeg"],replaceImage:"blank.gif",loadingImage:"spinner.gif",minWidth:100,minHeight:100};if(!JS_BRAMUS){var JS_BRAMUS=new Object}JS_BRAMUS.lazierLoad=Class.create();JS_BRAMUS.lazierLoad.prototype={initialize:function(a){$$("img").each(function(b){new JS_BRAMUS.lazierLoadImage(b,a)})}};JS_BRAMUS.lazierLoadImage=Class.create();JS_BRAMUS.lazierLoadImage.prototype={options:null,element:null,loading:false,loaded:false,position:null,viewportHeight:0,lazyScroller:null,initialize:function(a,b){this.options=Object.clone(lazierLoadDefaultOptions);Object.extend(this.options,b||{});this.element=a;this.position=Position.page(this.element);this.viewportHeight=document.viewport.getHeight();if(this.position[1]<this.viewportHeight+this.options.treshold){this.loading=true;this.loaded=true}else{this.element.origSrc=this.element.src;this.element.fileName=this.element.origSrc.substring(this.element.origSrc.lastIndexOf("/")+1,this.element.origSrc.length);this.element.fileType=this.element.fileName.substring(this.element.fileName.lastIndexOf(".")+1,this.element.fileName.length);if(this.options.extensions.indexOf(this.element.fileType)==-1){return}if(this.element.width<=parseInt(this.options.minWidth)&&this.element.height<=parseInt(this.options.minHeight)){return}this.element.src=this.options.replaceImage;this.element.setStyle({backgroundImage:"url("+this.options.loadingImage+")",backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat"});this.lazyScroller=this.lazyScroll.bindAsEventListener(this);Event.observe(window,"scroll",this.lazyScroller.bind(this),false)}},lazyScroll:function(){if(this.loaded==false&&this.loading!=true){if(document.viewport.getScrollOffsets()[1]+document.viewport.getHeight()+parseInt(this.options.treshold)>this.position[1]){this.loading=true;var a=null;a=new Image;a.src=this.element.origSrc;if(a.complete){this.element.src=a.src;this.loaded=true}else{a.onload=function(){this.element.src=a.src;this.loaded=true}.bind(this)}Event.stopObserving(window,"scroll",this.lazyScroller)}}}};if(lazierLoadAutoHook==true){function initLazierLoad(){myLL=new JS_BRAMUS.lazierLoad}Event.observe(document,"dom:loaded",initLazierLoad,false)}