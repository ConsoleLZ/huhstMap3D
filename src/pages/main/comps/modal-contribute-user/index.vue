<template>
	<a-modal v-model:visible="visible" :width="900" title="贡献用户" :footer="null">
        <p>感谢所有同学们的贡献，谢谢大家了</p>
		<a-list item-layout="horizontal" :data-source="userList">
			<template #renderItem="{ item }">
				<a-list-item>
					<a-list-item-meta
						:description="item.description"
					>
						<template #title>
							<a>{{ item.name }}</a>
						</template>
						<template #avatar>
							<a-avatar :src="item.avatar" />
						</template>
					</a-list-item-meta>
				</a-list-item>
			</template>
		</a-list>
	</a-modal>
</template>

<script lang="ts" src="./index.ts"></script>
