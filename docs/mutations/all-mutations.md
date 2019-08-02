# All Mutations

### Start Interaction

Mutation to handle interactions with the channel queue in core

Example:

```graphql
mutation {
	startInteraction(
		data: "John Mayer"
		channel: "music"
		options: "{ \"play\": true }"
	) {
		text
		executed
	}
}
```
