var testContent =
	"ABCDEFG HIJKLMN</br>OPQ RST UVW XYZ</br>abcdefg hijklmn</br>opq rst uvw xyz</br>0123456789</br>零壹贰叁肆伍陆柒捌玖";

$(function() {
	var app = new Vue({
		el: "#app",
		data: {
			familys: [],
			testContent: testContent
		},
		methods: {
			init:function() {
				let that = this;
				$.get('json/default-family.json', function(data) {
					that.familys = data;
				});
			},
			change:function(event) {
				this.testContent = event.currentTarget.innerHTML;
			},
			copy:function(data) {
				let url = data;
				let oInput = document.createElement('input');
				oInput.value = url;
				document.body.appendChild(oInput);
				oInput.select();
				document.execCommand("Copy");
				new $.zui.Messager('提示消息：复制成功', {
					placement: 'top-left',
					type: 'success'
				}).show();
				oInput.remove()
			},
		}
	});
	app.init();
})
