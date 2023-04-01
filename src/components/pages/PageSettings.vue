<template>
    <the-previous-page-bar 
        page-title="Instellingen" 
        previous-route="/"
    />
    <v-container>
        <v-card>
            <v-card-title>Welkom {{ userName }}</v-card-title>
            <v-card-subtitle>Wijzig je avatar:</v-card-subtitle>
            <v-card-actions>
                <v-avatar 
                    @click="notInPrototype()" 
                    color="surface-variant" 
                    size="50"
                >D</v-avatar>
            </v-card-actions>

            <div class="py-3"></div>

            <v-card-subtitle>Gebruikersnaam (aanpassen niet mogelijk)</v-card-subtitle>
            <v-card-text>{{ userName }}</v-card-text>
            <v-card-subtitle>Wijzig je wachtwoord:</v-card-subtitle>
            <v-card-actions>
                <v-btn 
                    color="primary" 
                    @click="notInPrototype"
                >Wachtwoord aanpassen</v-btn>
            </v-card-actions>

            <v-card-subtitle>Dark mode:</v-card-subtitle>
            <v-card-actions>
                <v-switch 
                    v-model="alwaysDisabled"
                    @change="notInPrototype"
                ></v-switch>
            </v-card-actions>

            <div class="py-3"></div>

            <v-card-subtitle>Meldingen ontvangen bij nieuwe toegewezen rapportages:</v-card-subtitle>
            <v-card-actions>
                <v-switch 
                    v-model="alwaysDisabled" 
                    @change="notInPrototype"
                ></v-switch>
            </v-card-actions>

            <v-card-subtitle>Melding geluiden:</v-card-subtitle>
            <v-card-actions>
                <v-switch 
                    v-model="alwaysDisabled" 
                    @change="notInPrototype"
                ></v-switch>
            </v-card-actions>

        </v-card>
    </v-container>
</template>
<script> 
import UserService from '@/services/UserService';
import ThePreviousPageBar from '@/components/template/sections/ThePreviousPageBar'
export default {
    components: {
        ThePreviousPageBar 
    },
    props: [
        'menuItems'
    ],
    computed: {
        userName()
        {
            return UserService.currentUser().userName
        },
        alwaysDisabled()
        {
            return false
        }
    },
    methods: {
        notInPrototype()
        {
            alert('Deze functie is niet beschikbaar in het prototype!');
        }
    }
}
</script>