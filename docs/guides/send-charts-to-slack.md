---
meta_description: "How to send image charts in slack channels using Image-Charts API."
---
# Slack

Image-Charts can be integrated with every tool. Slack is a well-known communication tool for teams.

Sharing Image-Charts URL directly inside a slack channel will only display a small image preview, it won't be big enough. Upload the same chart and the same result will happen.

However [Slack block kit API](https://api.slack.com/block-kit) allow an app to send bigger sized image charts to a slack channel thanks to the [Image block](https://api.slack.com/reference/block-kit/blocks#image). Checkout [this pre made example](https://app.slack.com/block-kit-builder/T039QQJ2Z#%7B%22blocks%22:%5B%7B%22type%22:%22image%22,%22title%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Chart%20RUL%22,%22emoji%22:true%7D,%22image_url%22:%22https://image-charts.com/chart?ichm=8ddb1ec5ebcb42389a527872f2f1094e49c6b7785010ad644f5f73fdbb92d9ef&cht=bvs&icac=documentation&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chf=b0,lg,90,03a9f4,0,3f51b5,1&chs=700x200&chxt=y&icretina=1&chof=.png%22,%22alt_text%22:%22chart%20url%22%7D%5D%7D).

```json
[
	{
		"type": "image",
		"title": {
			"type": "plain_text",
			"text": "Chart RUL",
			"emoji": true
		},
		"image_url": "https://image-charts.com/chart?ichm=8ddb1ec5ebcb42389a527872f2f1094e49c6b7785010ad644f5f73fdbb92d9ef&cht=bvs&icac=documentation&chd=s:theresadifferencebetweenknowingthepathandwalkingthepath&chf=b0,lg,90,03a9f4,0,3f51b5,1&chs=700x200&chxt=y&icretina=1&chof=.png",
		"alt_text": "chart url"
	}
]
```
