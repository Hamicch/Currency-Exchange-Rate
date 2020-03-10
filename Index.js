const app = new Vue({
        el: '#app',
        data () {
                return {
                        info: [],
                        rates: null
                }
        },

        mounted() {
                axios.get('https://api.exchangeratesapi.io/latest')
                .then(response => {
                        this.info = response.data.rates
                        this.rates = response.data
                })
        },

        template: `
                <div>
                <table class= "container">
                <thead>
                        <tr>
                                <th><h1>Currency</h1></th>
                                <th><h1>Rate in {{ rates.base }} as at {{ rates.date }}</h1></th>
                        </tr>
                </thead>
                <tbody>
                        <tr v-for="(name, base) in info">
                                <td>{{ base }}</td>
                                <td>{{ name }}</td>
                        </tr>
	        </tbody>
                </table>
        `
})