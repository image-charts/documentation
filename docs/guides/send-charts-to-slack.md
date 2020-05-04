# Slack

Image-Charts can be integrated with every tool. Slack is a well-known communication tool for teams.

Sharing Image-Charts URL directly inside a slack channel will only display a small image preview, it won't be big enough. Upload the same chart and the same result will happen.

However [Slack block kit API](https://api.slack.com/block-kit) allow an app to send bigger sized image charts to a slack channel thanks to the [Image block](https://api.slack.com/reference/block-kit/blocks#image). Checkout [this pre made example](https://api.slack.com/tools/block-kit-builder?mode=message&blocks=%5B%7B%22type%22%3A%22image%22%2C%22title%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Chart%20RUL%22%2C%22emoji%22%3Atrue%7D%2C%22image_url%22%3A%22https%3A%2F%2Fimage-charts.com%2Fchart%3Fichm%3Deee5082545d27af84c7a3f2af95445080b1b1cc3b3d75a141af1d0c18a1fff27%26cht%3Dbvs%26chd%3Ds%253Atheresadifferencebetweenknowingthepathandwalkingthepath%26chs%3D700x200%26chxt%3Dy%26chf%3Db0%252Clg%252C90%252C03a9f4%252C0%252C3f51b5%252C1%26icretina%3D1%26icac%3Dfgribreau%22%2C%22alt_text%22%3A%22chart%20url%22%7D%5D).

```json
[
	{
		"type": "image",
		"title": {
			"type": "plain_text",
			"text": "Chart RUL",
			"emoji": true
		},
		"image_url": "https://image-charts.com/chart?ichm=eee5082545d27af84c7a3f2af95445080b1b1cc3b3d75a141af1d0c18a1fff27&cht=bvs&chd=s%3Atheresadifferencebetweenknowingthepathandwalkingthepath&chs=700x200&chxt=y&chf=b0%2Clg%2C90%2C03a9f4%2C0%2C3f51b5%2C1&icretina=1&icac=fgribreau",
		"alt_text": "chart url"
	}
]
```
