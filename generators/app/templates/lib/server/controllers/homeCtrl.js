'use strict';

import * as mockdata from '../mockdata';

export function getPageData (req, res) {
	// handle the logic here
  res.status(200).json(mockdata.sampleData);
}

