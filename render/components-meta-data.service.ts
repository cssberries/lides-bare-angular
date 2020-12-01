import { Injectable, OnInit } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ComponentsMetaDataService {

	private data = [];
	private settings = [
		{
			"name": "btn",
			"blockStates":
				[
					"default",
				],
			"blockModifiers":
				[
					[
						"default",
						"integrated",
						"wired",
						"silent",
						"outline",
					]
				],
			"blockStatuses":
				[
					"primary",
					"secondary",
					"success",
					"warning",
					"error",
					"info",
				],
			"blockSizes":
				[
					"xs",
					"sm",
					"md",
					"lg",
					"xl",
				],
			"elements": [],
			"modifiers": [],
		},
		{
			"name": "tabs",
			"blockStates": ["default"],
			"blockModifiers":
				[
					"tabs--bottom-line",
					"tabs--integrated",
					"tabs--integrated tabs--bottom-line",
					"tabs--secondary",
					//
					"tabs--bottom-line tabs--secondary",
					"tabs--integrated tabs--secondary",
				],
			"blockStatuses": [
				"default",
				// "inverted",
			],
			"backgrounds": [
				"content",
				"primary",
				// "inverted",
			],
			"blockSizes":
				[
					"xs",
					"sm",
					"md",
					"lg",
					"xl",
				],
			"elements": [
				{ "name": "tabs__item", "text": "1", "state": "" },
				{ "name": "tabs__item", "text": "2", "state": "open" },
				{ "name": "tabs__item", "text": "3", "state": "" },
				{ "name": "tabs__item", "text": "4", "state": "hover" },
				{ "name": "tabs__item", "text": "5", "state": "" },
				{ "name": "tabs__item", "text": "6", "state": "focus" },
			],
			"modifiers": [],
		},
		{
			"name": "buttons-group",
			"blockStates": ["default"],
			"blockModifiers":
				[

					"default",
					"buttons-group--bordered",
					"buttons-group--separated",
					"buttons-group--separated buttons-group--integrated",
					"buttons-group--integrated",
					"buttons-group--separated buttons-group--bordered",

				],
			"blockStatuses": [
				"default",
				"secondary",
				"primary",
			],
			"blockSizes":
				[
					"xs",
					"sm",
					"md",
					"lg",
					"xl",
				],
			"elements": [
				{ "name": "btn", "text": "1", "state": "open" },
				{ "name": "btn", "text": "2", "state": "" },
				{ "name": "btn", "text": "3", "state": "hover" },
				{ "name": "btn", "text": "4", "state": "" },
				{ "name": "btn", "text": "5", "state": "active" },
				{ "name": "btn", "text": "6", "state": "" },
				{ "name": "btn", "text": "7", "state": "focus" },
			],
			"modifiers": [],
		},
	];


	constructor() {

	}

	generate(opt) {

		opt.forEach(block => {

			block.blockStatuses.forEach(blockStatus => {
				block.blockSizes.forEach(blockSize => {
					block.blockModifiers.forEach(blockModifier => {
						let example = {};
						example['block'] = block.name;
						example['blockModifier'] = blockModifier;
						example['blockStatus'] = blockStatus;
						example['blockSize'] = blockSize;
						example['elements'] = block.elements;

						this.data.push(example);
					});
				});
			});
		});

	}

	metaData() {
		this.generate(this.settings);
		return this.data;
	}
}
