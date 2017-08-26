<template>
    <div class='Template'>
        {{ template }}
    </div>
</template>

<script>

import Vue from 'Vue';
import Component from 'vue-class-component';

@Component
class Template extends Vue {
    constructor(props) {
        super(props);
        this.template = 'TEMPLATE';
    }
}
export default Template;

</script>

<style lang='less' scoped>
.Template {}
</style>
