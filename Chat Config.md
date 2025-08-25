Import the CSS and use the createChat function to initialize your Chat window.

import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

createChat({
	webhookUrl: 'https://wb.aikanakamura.com/webhook/0e8d2744-1dea-4a44-9942-c4cc44b60cc1/chat'
});


<script lang="ts" setup>
// App.vue
import { onMounted } from 'vue';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

onMounted(() => {
	createChat({
		webhookUrl: 'https://wb.aikanakamura.com/webhook/0e8d2744-1dea-4a44-9942-c4cc44b60cc1/chat'
	});
});
</script>
<template>
	<div></div>
</template>