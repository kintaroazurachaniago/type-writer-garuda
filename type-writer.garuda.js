// Just make html input tag seems below
// <input type="text" placeholder="Search..." class="search-field" id="search-field" onfocus="ketik(this)">
// Then add this script

const ketik = e => {
	e.placeholder = ''
	var char = 0, index = 0, writinginterval, erasinginterval
	const text = [
		'Alo bang! :v',
		'Makasih uda mampir kemari :)',
		'Jangan kapok yaa :(',
		'Jaga kesehatan! :D',
		'HEHE...'
	], write = _ => {
		if (index === text.length) {
			index = 0
		} else {
			if (char === text[index].length) {
				clearInterval(writinginterval)
				index++
				setTimeout(_ => {
					console.log('erasing')
					erasinginterval = setInterval(erase, 20)
				}, 1000)
			} else {
				e.placeholder += text[index][char]
				char++
			}
		}
	}, erase = _ => {
		if (char === 0) {
			clearInterval(erasinginterval)
			setTimeout(_ => {
				console.log('writing index ' + index)
				writinginterval = setInterval(write, 100)
			}, 300)
		} else {
			e.placeholder = e.placeholder.slice(0, -1)
			char--
		}
	}
	writinginterval = setInterval(write, 100)
}
