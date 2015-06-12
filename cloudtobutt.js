// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
    v = v.replace(/The Cloud/g, "My Butt");
	v = v.replace(/The cloud/g, "My butt");
    v = v.replace(/the Cloud/g, "my Butt");
	v = v.replace(/the cloud/g, "my butt");
    v = v.replace(/Cloud/g, "Butt");
	v = v.replace(/cloud/g, "butt");
	  v = v.replace(/CLOUD/g, "BUTT");
	
	textNode.nodeValue = v;
}

function walkbody() {
	if (document.body !== null) {
		walk(document.body);
	}
}

window.onload = walkbody;