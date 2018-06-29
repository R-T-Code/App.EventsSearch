class EventBrite {
    // Constructor when instanciate
    constructor() {
        this.auth_token = 'DDFQJ2KUDJJQEW6MC7Q2';
        this.orderby = 'date';
    }

    // Get the Events from API
    async queryAPI(eventName, category){
        const eventResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);

        // Wait fot response and return as json

        const events = await eventResponse.json();

        return {
            events
        }
    }

    // Get categories from API
    async getCategoriesAPI(){
        // Query the API
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // Hold for the response and then return as json
        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}