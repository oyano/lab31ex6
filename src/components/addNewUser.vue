<template>
    <div id='app'>
        <generate-list v-bind:newUser="newUser"></generate-list>
        <div id='addValues'>
            <div class="addNew">
                <h2>Добавить запись</h2>
                <label for="name">Name</label>
                <input type="text" maxlength="20" placeholder="Name" v-model='newUser.name'>
                <label for="name">Surname</label>
                <input type="text" maxlength="20" placeholder="Surname" v-model='newUser.surname'>
                <label for="name">Patronymic Name</label>
                <input type="text" maxlength="20" placeholder="Patronymic Name" v-model='newUser.patronymicName'>
                <label for="name">Phone</label>
                <input type="tel" placeholder="71234567890" v-model='newUser.phone' pattern="[0-9]{11}" maxlength="11">
                <label for="name">Text</label>
                <textarea maxlength="200" placeholder="Text" v-model='newUser.text'></textarea>
                <button v-on:click='addValues()'>Добавить</button>
            </div>
        </div>
    </div>
</template>

<script>
import generateList from './generateList.vue'
export default{
    name: 'addUser',
    data() { 
        return{
            newUser: {
                name: '',
                surname: '',
                patronymicName: '',
                phone: '',
                text: '',
                favorites: false,
            },
        };
    },
    methods: {
        addValues: function() {
            this.newUser = {
                name: this.newUser.name,
                surname: this.newUser.surname,
                patronymicName: this.newUser.patronymicName,
                phone: this.newUser.phone,
                text: this.newUser.text,
                favorites: false
            };
        },

    },
    components:{
        generateList
    },
    
}
</script>
