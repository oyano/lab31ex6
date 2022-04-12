<template>
    <div id='app'>
        <ul>
            <h2>Список:</h2>
            <li v-for='(user, index) in users' v-bind:key="user.index">
                <img src="../favorite.png" width="40px" height="40px" v-on:click='doReverse' v-if='user.favorites' :checked='user.favorites' :id='index'>
                <input type="button" v-on:click='doReverse' :checked='user.favorites' v-else :id='index'>
                <span>
                    {{ index + 1 }}. {{ user.surname }} {{ user.name }} {{ user.patronymicName }} | Номер телефона: {{ user.phone }} | Написанный текст: {{user.text}}
                </span>
            </li>
        </ul>

        <div id="sortMassive">
            <h2>
                Сортировка
            </h2>
            <div class="container">
                <button class="sortName" v-on:click='sortName'>
                    По имени
                </button>
                <button class="sortName" v-on:click='sortSurname'>
                    По фамилии
                </button>
            </div>
        </div>
        <!-- <add-new v-bind:newUser="addedUser"></add-new> -->
    </div>
</template>

<script>

export default{
    name: 'generateList',
    data(){
        return {
            users: [{
                text: 'SomeText1',
                name: 'Георгий',
                surname: 'Ефанов',
                patronymicName: 'Николаевич',
                phone: 79001112233,
                favorites: false
            }, {
                text: 'SomeText2',
                name: 'Дмитрий',
                surname: 'Копин',
                patronymicName: 'Анатольевич',
                phone: 79001112233,
                favorites: false
            }, {
                text: 'SomeText3',
                name: 'Алесандр',
                surname: 'Великодный',
                patronymicName: 'Романович',
                phone: 79001112233,
                favorites: false
            }, {
                text: 'SomeText4',
                name: 'Михаил',
                surname: 'Александров',
                patronymicName: 'Сергеевич',
                phone: 79001112233,
                favorites: false
            }, {
                text: 'SomeText5',
                name: 'Захар',
                surname: 'Захаров',
                patronymicName: 'Захарович',
                phone: 79001112233,
                favorites: false
            }, {
                text: 'SomeText6',
                name: 'Ян',
                surname: 'Янсков',
                patronymicName: 'Янов',
                phone: 79001112233,
                favorites: false
            }]
        }
    },
    methods: {
        doReverse: function() {
            let index = event.target.id
            this.users[index]['favorites'] = !this.users[index]['favorites'];
            this.sortSurname();
        },
        sortName: function() {
            this.users.sort(function compare(a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            this.users.sort(function compare(a, b) {
                if (a.favorites) {
                    return -1;
                }
                if (b.favorites) {
                    return 1;
                }
                return 0;
            });
            this.users.sort(function compare(a, b) {
                if (a.favorites && b.favorites) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                }
                return 0;
            });
        },
        sortSurname: function() {
            this.users.sort(function compare(a, b) {
                if (a.surname < b.surname) {
                    return -1;
                }
                if (a.surname > b.surname) {
                    return 1;
                }
                return 0;
            });
            this.users.sort(function compare(a, b) {
                if (a.favorites) {
                    return -1;
                }
                if (b.favorites) {
                    return 1;
                }
                return 0;
            });
            this.users.sort(function compare(a, b) {
                if (a.favorites && b.favorites) {
                    if (a.surname > b.surname) {
                        return 1;
                    }
                    if (a.surname < b.surname) {
                        return -1;
                    }
                }
                return 0;
            });
            
        },
    },
    watch:{
        newUser(user){
            this.users.push(user);
            user = Object;
            this.sortSurname();
        }
    },
    props:{
        newUser: Object,
    }
}
</script>
<style>
    @import url('../style.css');
</style>
