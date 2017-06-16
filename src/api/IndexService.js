import IndexApi from './IndexApi';

export default class IndexService extends Api {
	about(params) {
		return this.get(`/about/`, params)
	}

	park(params) {
		return this.get(`/catalog/park/`, params)
	}

	architecture(params) {
		return this.get(`/catalog/architecture/`, params)
	}

	decoration(params) {
		return this.get(`/catalog/decoration/`, params)
	}

	projects(params) {
		return this.get(`/projects/`, params)
	}

	callback(body) {
		return this.post('/callback/', body)
	}
}