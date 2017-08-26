<template>
    <div class='ChatItem'>
        <icon class='notFoundIcon' name='user-circle' scale='2' v-bind:style='colorStyle'></icon>
        {{ item.message }}
    </div>
</template>

<script>

import Vue from 'Vue';
import Component from 'vue-class-component';

@Component({
    props: ['item'],
})
class ChatItem extends Vue {
    constructor(props) {
        super(props);
        const randomColor = ['#FFADC5','#B8F3B8','#FFA9B0','#CCD1FF','#FFDDA6','#FC9EBD','#FFCCCC','#A8C8F9','#C2E0BA','#ECAFB5','#EBDBC4','#BBD1E8','#F8E5D0','#C8EE9D','#A9E2C5','#EBE5E4','#C6D6F7','#FFBDBD','#9197B5','#D3F3ED','#9EDDD0','#2ED7D2','#98DFD8','#F7B9D9','#AB95D4','#DDDDFF','#FFDDDD','#9DDDE9','#FFAFCC'];
        this.colorStyle = {
            color: randomColor[Math.floor(Math.random() * randomColor.legnth)],
        }
    }
}
export default ChatItem;

</script>

<style lang='less' scoped>
.ChatItem {}
</style>
