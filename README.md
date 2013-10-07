SelectboxCascader (Java Script)
===================

Make Selectbox Cascade
This need jQuery

Usage
=====

```javascript

var selectboxCascade = new SelectboxCascade();	// Make Object

selectboxCascade.addSelectbox($("#select01"));	// Add Select Object
selectboxCascade.addSelectbox($("#select02"));
selectboxCascade.addSelectbox($("#select03"));

selectboxCascade.setCascadeData(	// Set Data
{
	listHead: "SelectType1",			// Set List Head Label
	subItems:								// Set Items
	[
		{
			name: "Item1",						// Item Name
			value: "01",						// Item Value
			listHead: "Select1Type2",
			subItems: 
			[
				{
					name: "Item1-1",
					value: "0101",
					listHead: "Select11Type3",
					subItems:
					[
						{name: "Item1-1-1", value: "010101"}
					]
				}
			]
		}
	]
});

```

Sample
======
http://mabin359.github.io/SelectboxCascaderJS/sample.htm
