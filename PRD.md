# communicator PRD

## Product Role

Communicator is the Commonwealth messaging client.

## Target Users

- The platform owner messaging from Workspace on desktop/web.
- The same user through a later iOS wrapper.

## Core Workflows

- View conversations.
- Send and receive messages.
- See participant and delivery state.
- Continue the same messaging state across Workspace and future iOS surfaces.

## In Scope

- React web messaging client.
- Mainframe-backed conversations and messages.
- `CommunicatorMount` export for Workspace.
- API shape stable enough for a future iOS wrapper.

## Out Of Scope

- iOS implementation in the first web milestone.
- Independent backend service.
- Public multi-user chat product.

## Success Criteria

- Communicator renders inside Workspace.
- Messages persist through Mainframe.
- Conversation state can be consumed by a future iOS client.
