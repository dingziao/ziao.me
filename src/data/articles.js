import React from "react";

function article_1() {
	return {
		date: "2023-10-20",
		title: "Bonfire 2023",
		description:
			"",
		keywords: [
			"",
		],
		pic_path: "./bonfire.jpg",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				
				p {
					font-family: 'Microsoft JhengHei', sans-serif;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
						Content of article 1
						</p>
						
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2023-08-26",
		title: "日记",
		description:
			"",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid red;
			}
			
			p {
				font-family: 'Microsoft JhengHei', sans-serif;
			}
			`,
		keywords: [
			"",
		],
		pic_path: "./dartmouthhall.jpg",
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
						翻来翻去发现每一篇日记都好私人, 还是先不放了, 以后再说🤣
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_2];

export default myArticles;
