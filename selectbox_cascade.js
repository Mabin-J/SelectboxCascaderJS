function SelectboxCascade(){
	this.selectboxArr = new Array();
	this.selectboxArrCnt = 0;
	this.selectboxHeadLabel = new Array();
	this.objectPerLevel = new Array();

	this.cascadeData;
	this.addSelectbox = function(selectbox){
		selectbox.data("level", this.selectboxArrCnt);
		selectbox.data("core", this);
		selectbox.change(function(){
			var thisLevel = $(this).data("level");
			var core = $(this).data("core");
			var subItems = core.objectPerLevel[thisLevel];
			var childSelectbox = core.selectboxArr[thisLevel + 1];
			
			var clearStartPoint = 2;
			if(this.value == "")
				clearStartPoint = 1;

			for(var i = thisLevel + clearStartPoint; i < core.selectboxArrCnt; i++){
				core.setHeadLabel(i, core.selectboxHeadLabel[i]);
				core.selectboxArr[i].attr("disabled", true);
			}

			if(this.value != "" && (thisLevel != (core.selectboxArrCnt - 1))){
				for(var i = 0; i < subItems.length; i++){
					if(subItems[i].value == this.value){
						core.objectPerLevel[thisLevel + 1] = subItems[i].subItems;
						childSelectbox.attr("disabled", false);
						childSelectbox.empty();
						childSelectbox.append("<option value=''>" + subItems[i].listHead + "</option>");

						core.objectPerLevel[thisLevel + 1] = subItems[i].subItems;
						for(var j = 0; j < subItems[i].subItems.length; j++){
							childSelectbox.append("<option value='" + subItems[i].subItems[j].value + "'>" + subItems[i].subItems[j].name + "</option>");
						}
						break;
					}
				}
			}
		});

		this.selectboxArr[this.selectboxArrCnt] = selectbox;
		this.selectboxArrCnt++;

		if(this.cascadeData != null){
			
			this.setCascadeData(this.cascadeData);
		}
	};

	this.setCascadeData = function(cascadeData){
		this.cascadeData = cascadeData;

		for(var i = 0; i < this.selectboxArrCnt; i++){
			var selectbox = this.selectboxArr[i];

			if(i == 0) {
				selectbox.empty();
				selectbox.append("<option value=''>" + this.cascadeData.listHead + "</option>");
				for(var j = 0; j < this.cascadeData.subItems.length; j++){
					selectbox.append("<option value='" + this.cascadeData.subItems[j].value + "'>" + this.cascadeData.subItems[j].name + "</option>");
				}

				this.objectPerLevel[0] = this.cascadeData.subItems;
			} else {
				this.selectboxHeadLabel[i] = "Please Select Level " + i;
				selectbox.empty();
				selectbox.append("<option value=''>" + this.selectboxHeadLabel[i] + "</option>");
				selectbox.attr("disabled", true);
			}			
		}
	};

	this.setHeadLabel = function(level, label){
		this.selectboxArr[level].empty();
		this.selectboxArr[level].append("<option value=''>" + label + "</option>");
		this.selectboxHeadLabel[level] = label;
	};
}
