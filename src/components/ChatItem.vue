<template>
    <div class='ChatItemList'>
        <div class='ChatItem'>
            <icon class='userIcon' name='user-circle' scale='2' v-bind:style='colorStyle'></icon>
            <div class='message'>
                {{ `${item.message}` }}
            </div>
        </div>
    </div>
</template>

<script>

import Vue from 'Vue';
import Component from 'vue-class-component';

@Component({
    props: ['item'],
})
class ChatItem extends Vue {
    beforeMount() {
        const randomColor = ['#FFADC5', '#B8F3B8', '#FFA9B0', '#CCD1FF', '#FFDDA6', '#FC9EBD', '#FFCCCC', '#A8C8F9', '#C2E0BA', '#ECAFB5', '#EBDBC4', '#BBD1E8', '#F8E5D0', '#C8EE9D', '#A9E2C5', '#EBE5E4', '#C6D6F7', '#FFBDBD', '#9197B5', '#D3F3ED', '#9EDDD0', '#2ED7D2', '#98DFD8', '#F7B9D9', '#AB95D4', '#DDDDFF', '#FFDDDD', '#9DDDE9', '#FFAFCC'];
        this.colorStyle = {
            color: randomColor[Math.floor(Math.random() * randomColor.length)],
        }
    }
}
export default ChatItem;

</script>

<style lang='less' scoped>
.ChatItemList {
    padding: 10px;
    text-align: left;

    &:nth-child(even) {
        background-color: #fdfdfd;
    }

    .ChatItem {
        display: flex;
        align-items: center;

        .userIcon {
            min-width: 32px;
            min-height: 32px;
        }

        .message {
            margin-left: 10px;
            display: inline-block;
        }
    }
}
</style>
