<template>
    <div class='Chat'>
        <div class='chatListArea'>
            <div class='chatList' ref='chatListDom' v-show='messageItem.length > 0'>
                <chatItem v-for='item in messageItem' v-bind:key='item.key' :item='item' />
            </div>
            <div class='alertMessageArea' v-if='isShowAlertMessage'>
                <div class='notFoundDataMessage'>
                    <icon class='notFoundIcon' name='exclamation-triangle' scale='4'></icon>
                    <br /> 입력된 데이터가 없습니다.
                </div>
            </div>
        </div>
        <div class='chatTools'>
            <input class='inputBox' type='text' v-model='message' @keyup='onInputBoxKeyup' />
            <button class='sendButton' @click='onMsgButtonClick'>
                전송
            </button>
        </div>
    </div>
</template>

<script>

import Vue from 'Vue';
import { Component, Watch } from 'vue-property-decorator'
import firebase from 'firebase';
import moment from 'moment';
import ChatItem from './ChatItem';

@Component({
    components: {
        'chatItem': ChatItem
    },
})
class Chat extends Vue {
    constructor(props) {
        super(props);
        this.message = '';
        this.isShowAlertMessage = false;
        this.messageItem = [];
    }

    @Watch('messageItem')
    onMessageItemChanged(val, oldVal) {
        
    }

    beforeMount() {
        this.chatRef = firebase.database().ref(`chat/test`);
    }

    mounted() {
        console.log('mounted');
        const chatListener = this.chatRef.limitToLast(100);
        chatListener.once('value', (snapshot) => {
            this.isShowAlertMessage = !snapshot.hasChildren();
        });
        chatListener.on('child_added', (item) => {
            this.isShowAlertMessage = false;
            const { key } = item;
            const value = item.val();
            const { message = '', author = 'UNKNOWN', date = '1900-01-01' } = value;
            this.messageItem.push({
                key,
                author,
                message,
                date,
            });

            this.$nextTick(() => {
                this.setScollChat();
            });
        });
    }

    updated() {

    }

    onInputBoxKeyup({ keyCode }) {
        if (keyCode === 13) {
            this.onMsgButtonClick();
        }
    }

    onMsgButtonClick() {
        console.log('전송', moment().format('YYYY-MM-DD'));

        this.chatRef.push({
            author: 'tester',
            message: this.message,
            date: moment().format('YYYY-MM-DD'),
        });

        this.message = '';
    }

    setScollChat() {
        const { chatListDom } = this.$refs;
        if (chatListDom) {
            chatListDom.scrollTop = chatListDom.scrollHeight;
            // a.scrollHeight - a.clientHeight === a.scrollTop
            console.log(`scroll!! ${chatListDom.scrollTop} ${chatListDom.scrollHeight}`);
        }
    }
}
export default Chat;

</script>

<style lang='less' scoped>
.Chat {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .chatListArea {
        display: flex;
        flex: 1;

        .chatList {
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }

        .alertMessageArea {
            flex: 1;
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;

            .notFoundIcon {
                color: red;
            }
        }
    }

    .chatTools {
        display: flex;
        height: 30px;
        padding: 5px;

        .inputBox {
            flex: 1;
            margin-right: 5px;
        }

        .sendButton {
            width: 70px;
        }
    }
}
</style>
