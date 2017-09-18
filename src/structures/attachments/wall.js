'use strict';

import Attachment from './attachment';

export default class WallAttachment extends Attachment {
	/**
	 * Constructor
	 *
	 * @param {Object} payload
	 * @param {VK}     vk
	 */
	constructor (payload, vk) {
		super('market', payload.owner_id, payload.id, payload.access_key);

		this.vk = vk;
		this.payload = payload;

		this._isFilled = 'date' in payload;
	}

	/**
	 * Returns whether the attachment is filled
	 *
	 * @return {boolean}
	 */
	isFilled () {
		return this._isFilled;
	}

	/**
	 * Get photo info
	 *
	 * @return {Promise}
	 */
	async getAttachmentPayload () {
		const posts = await this.vk.api.wall.getById({
			posts: `${this.owner}_${this.id}`,
			extended: 0
		});

		this.payload = posts[0];

		if ('access_key' in this.payload) {
			this.accessKey = this.payload.access_key;
		}

		this._isFilled = true;
	}
}
