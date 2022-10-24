document.getElementById("trace").onclick = function() {
	console.log("##### CONSOLE.TRACE");
	function a() { console.trace("GDE? - CALL STACK"); }
	function b() { a(); }
	function c() { b();	}
	function d() { c();	}
	function e() { d();	}

	e();
}