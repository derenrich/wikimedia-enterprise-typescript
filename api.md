# Codes

Types:

- <code><a href="./src/resources/codes.ts">Code</a></code>
- <code><a href="./src/resources/codes.ts">Filter</a></code>
- <code><a href="./src/resources/codes.ts">CodeCreateResponse</a></code>
- <code><a href="./src/resources/codes.ts">CodeListResponse</a></code>

Methods:

- <code title="post /v2/codes">client.codes.<a href="./src/resources/codes.ts">create</a>({ ...params }) -> CodeCreateResponse</code>
- <code title="get /v2/codes/{identifier}">client.codes.<a href="./src/resources/codes.ts">retrieve</a>(identifier, { ...params }) -> Code</code>
- <code title="post /v2/codes/{identifier}">client.codes.<a href="./src/resources/codes.ts">update</a>(identifier, { ...params }) -> Code</code>
- <code title="get /v2/codes">client.codes.<a href="./src/resources/codes.ts">list</a>({ ...params }) -> CodeListResponse</code>

# Languages

Types:

- <code><a href="./src/resources/languages.ts">Language</a></code>
- <code><a href="./src/resources/languages.ts">LanguageCreateResponse</a></code>
- <code><a href="./src/resources/languages.ts">LanguageListResponse</a></code>

Methods:

- <code title="post /v2/languages">client.languages.<a href="./src/resources/languages.ts">create</a>({ ...params }) -> LanguageCreateResponse</code>
- <code title="get /v2/languages/{identifier}">client.languages.<a href="./src/resources/languages.ts">retrieve</a>(identifier, { ...params }) -> Language</code>
- <code title="post /v2/languages/{identifier}">client.languages.<a href="./src/resources/languages.ts">update</a>(identifier, { ...params }) -> Language</code>
- <code title="get /v2/languages">client.languages.<a href="./src/resources/languages.ts">list</a>({ ...params }) -> LanguageListResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /v2/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /v2/projects/{identifier}">client.projects.<a href="./src/resources/projects.ts">retrieve</a>(identifier, { ...params }) -> Project</code>
- <code title="post /v2/projects/{identifier}">client.projects.<a href="./src/resources/projects.ts">update</a>(identifier, { ...params }) -> Project</code>
- <code title="get /v2/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>

# Namespaces

Types:

- <code><a href="./src/resources/namespaces.ts">Namespace</a></code>
- <code><a href="./src/resources/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="post /v2/namespaces">client.namespaces.<a href="./src/resources/namespaces.ts">create</a>({ ...params }) -> NamespaceCreateResponse</code>
- <code title="get /v2/namespaces/{identifier}">client.namespaces.<a href="./src/resources/namespaces.ts">retrieve</a>(identifier, { ...params }) -> Namespace</code>
- <code title="post /v2/namespaces/{identifier}">client.namespaces.<a href="./src/resources/namespaces.ts">update</a>(identifier, { ...params }) -> Namespace</code>
- <code title="get /v2/namespaces">client.namespaces.<a href="./src/resources/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponse</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">Batch</a></code>
- <code><a href="./src/resources/batches.ts">Size</a></code>
- <code><a href="./src/resources/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/batches.ts">BatchRetrieveResponse</a></code>

Methods:

- <code title="post /v2/batches/{date}/{hour}">client.batches.<a href="./src/resources/batches.ts">create</a>(hour, { ...params }) -> BatchCreateResponse</code>
- <code title="get /v2/batches/{date}/{hour}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(hour, { ...params }) -> BatchRetrieveResponse</code>
- <code title="get /v2/batches/{date}/{hour}/{identifier}/download">client.batches.<a href="./src/resources/batches.ts">downloadByIdentifier</a>(identifier, { ...params }) -> Response</code>
- <code title="get /v2/batches/{date}/{hour}/{identifier}">client.batches.<a href="./src/resources/batches.ts">retrieveByIdentifier</a>(identifier, { ...params }) -> Batch</code>
- <code title="post /v2/batches/{date}/{hour}/{identifier}">client.batches.<a href="./src/resources/batches.ts">updateByIdentifier</a>(identifier, { ...params }) -> Batch</code>

# Snapshots

Types:

- <code><a href="./src/resources/snapshots/snapshots.ts">Snapshot</a></code>
- <code><a href="./src/resources/snapshots/snapshots.ts">SnapshotCreateResponse</a></code>
- <code><a href="./src/resources/snapshots/snapshots.ts">SnapshotListResponse</a></code>

Methods:

- <code title="post /v2/snapshots">client.snapshots.<a href="./src/resources/snapshots/snapshots.ts">create</a>({ ...params }) -> SnapshotCreateResponse</code>
- <code title="get /v2/snapshots/{identifier}">client.snapshots.<a href="./src/resources/snapshots/snapshots.ts">retrieve</a>(identifier, { ...params }) -> Snapshot</code>
- <code title="post /v2/snapshots/{identifier}">client.snapshots.<a href="./src/resources/snapshots/snapshots.ts">update</a>(identifier, { ...params }) -> Snapshot</code>
- <code title="get /v2/snapshots">client.snapshots.<a href="./src/resources/snapshots/snapshots.ts">list</a>({ ...params }) -> SnapshotListResponse</code>
- <code title="get /v2/snapshots/{identifier}/download">client.snapshots.<a href="./src/resources/snapshots/snapshots.ts">download</a>(identifier, { ...params }) -> Response</code>

## Chunks

Methods:

- <code title="post /v2/snapshots/{snapshot_identifier}/chunks">client.snapshots.chunks.<a href="./src/resources/snapshots/chunks.ts">create</a>(snapshotIdentifier, { ...params }) -> Snapshot</code>
- <code title="get /v2/snapshots/{snapshot_identifier}/chunks/{identifier}">client.snapshots.chunks.<a href="./src/resources/snapshots/chunks.ts">retrieve</a>(identifier, { ...params }) -> Snapshot</code>
- <code title="post /v2/snapshots/{snapshot_identifier}/chunks/{identifier}">client.snapshots.chunks.<a href="./src/resources/snapshots/chunks.ts">update</a>(identifier, { ...params }) -> Snapshot</code>
- <code title="get /v2/snapshots/{snapshot_identifier}/chunks">client.snapshots.chunks.<a href="./src/resources/snapshots/chunks.ts">list</a>(snapshotIdentifier, { ...params }) -> Snapshot</code>
- <code title="get /v2/snapshots/{snapshot_identifier}/chunks/{identifier}/download">client.snapshots.chunks.<a href="./src/resources/snapshots/chunks.ts">download</a>(identifier, { ...params }) -> Response</code>

## StructuredContents

Types:

- <code><a href="./src/resources/snapshots/structured-contents.ts">StructuredContentCreateResponse</a></code>
- <code><a href="./src/resources/snapshots/structured-contents.ts">StructuredContentListResponse</a></code>

Methods:

- <code title="post /v2/snapshots/structured-contents">client.snapshots.structuredContents.<a href="./src/resources/snapshots/structured-contents.ts">create</a>({ ...params }) -> StructuredContentCreateResponse</code>
- <code title="get /v2/snapshots/structured-contents/{identifier}">client.snapshots.structuredContents.<a href="./src/resources/snapshots/structured-contents.ts">retrieve</a>(identifier, { ...params }) -> Snapshot</code>
- <code title="post /v2/snapshots/structured-contents/{identifier}">client.snapshots.structuredContents.<a href="./src/resources/snapshots/structured-contents.ts">update</a>(identifier, { ...params }) -> Snapshot</code>
- <code title="get /v2/snapshots/structured-contents">client.snapshots.structuredContents.<a href="./src/resources/snapshots/structured-contents.ts">list</a>({ ...params }) -> StructuredContentListResponse</code>
- <code title="get /v2/snapshots/structured-contents/{identifier}/download">client.snapshots.structuredContents.<a href="./src/resources/snapshots/structured-contents.ts">download</a>(identifier, { ...params }) -> Response</code>

# Articles

Types:

- <code><a href="./src/resources/articles.ts">Article</a></code>
- <code><a href="./src/resources/articles.ts">Entity</a></code>
- <code><a href="./src/resources/articles.ts">Event</a></code>
- <code><a href="./src/resources/articles.ts">Link</a></code>
- <code><a href="./src/resources/articles.ts">Part</a></code>
- <code><a href="./src/resources/articles.ts">Version</a></code>
- <code><a href="./src/resources/articles.ts">Visibility</a></code>
- <code><a href="./src/resources/articles.ts">ArticleCreateResponse</a></code>
- <code><a href="./src/resources/articles.ts">ArticleRetrieveResponse</a></code>

Methods:

- <code title="post /v2/articles/{name}">client.articles.<a href="./src/resources/articles.ts">create</a>(name, { ...params }) -> ArticleCreateResponse</code>
- <code title="get /v2/articles/{name}">client.articles.<a href="./src/resources/articles.ts">retrieve</a>(name, { ...params }) -> ArticleRetrieveResponse</code>

# Wikidata

## Items

Types:

- <code><a href="./src/resources/wikidata/items.ts">License</a></code>
- <code><a href="./src/resources/wikidata/items.ts">Protection</a></code>
- <code><a href="./src/resources/wikidata/items.ts">WikidataArticle</a></code>
- <code><a href="./src/resources/wikidata/items.ts">WikidataEntityProperty</a></code>
- <code><a href="./src/resources/wikidata/items.ts">WikidataEntityValue</a></code>
- <code><a href="./src/resources/wikidata/items.ts">ItemCreateResponse</a></code>
- <code><a href="./src/resources/wikidata/items.ts">ItemRetrieveResponse</a></code>

Methods:

- <code title="post /v2/wikidata/items/{identifier}">client.wikidata.items.<a href="./src/resources/wikidata/items.ts">create</a>(identifier, { ...params }) -> unknown</code>
- <code title="get /v2/wikidata/items/{identifier}">client.wikidata.items.<a href="./src/resources/wikidata/items.ts">retrieve</a>(identifier, { ...params }) -> unknown</code>

## Properties

Types:

- <code><a href="./src/resources/wikidata/properties.ts">PropertyCreateResponse</a></code>
- <code><a href="./src/resources/wikidata/properties.ts">PropertyRetrieveResponse</a></code>

Methods:

- <code title="post /v2/wikidata/properties/{identifier}">client.wikidata.properties.<a href="./src/resources/wikidata/properties.ts">create</a>(identifier, { ...params }) -> unknown</code>
- <code title="get /v2/wikidata/properties/{identifier}">client.wikidata.properties.<a href="./src/resources/wikidata/properties.ts">retrieve</a>(identifier, { ...params }) -> unknown</code>

## Labels

Types:

- <code><a href="./src/resources/wikidata/labels.ts">LabelCreateResponse</a></code>
- <code><a href="./src/resources/wikidata/labels.ts">LabelRetrieveResponse</a></code>

Methods:

- <code title="post /v2/wikidata/labels/{identifier}">client.wikidata.labels.<a href="./src/resources/wikidata/labels.ts">create</a>(identifier, { ...params }) -> unknown</code>
- <code title="get /v2/wikidata/labels/{identifier}">client.wikidata.labels.<a href="./src/resources/wikidata/labels.ts">retrieve</a>(identifier, { ...params }) -> unknown</code>

# StructuredContents

Types:

- <code><a href="./src/resources/structured-contents.ts">Image</a></code>
- <code><a href="./src/resources/structured-contents.ts">StructuredContent</a></code>
- <code><a href="./src/resources/structured-contents.ts">StructuredContentCreateResponse</a></code>
- <code><a href="./src/resources/structured-contents.ts">StructuredContentRetrieveResponse</a></code>

Methods:

- <code title="post /v2/structured-contents/{name}">client.structuredContents.<a href="./src/resources/structured-contents.ts">create</a>(name, { ...params }) -> StructuredContentCreateResponse</code>
- <code title="get /v2/structured-contents/{name}">client.structuredContents.<a href="./src/resources/structured-contents.ts">retrieve</a>(name, { ...params }) -> StructuredContentRetrieveResponse</code>

# Login

Types:

- <code><a href="./src/resources/login.ts">LoginAuthenticateResponse</a></code>

Methods:

- <code title="post /v1/login">client.login.<a href="./src/resources/login.ts">authenticate</a>({ ...params }) -> LoginAuthenticateResponse</code>

# TokenRefresh

Types:

- <code><a href="./src/resources/token-refresh.ts">TokenRefreshRefreshResponse</a></code>

Methods:

- <code title="post /v1/token-refresh">client.tokenRefresh.<a href="./src/resources/token-refresh.ts">refresh</a>({ ...params }) -> TokenRefreshRefreshResponse</code>

# TokenRevoke

Methods:

- <code title="post /v1/token-revoke">client.tokenRevoke.<a href="./src/resources/token-revoke.ts">revoke</a>({ ...params }) -> void</code>

# ForgotPassword

Methods:

- <code title="post /v1/forgot-password">client.forgotPassword.<a href="./src/resources/forgot-password.ts">sendConfirmationCode</a>({ ...params }) -> void</code>

# ForgotPasswordConfirm

Methods:

- <code title="post /v1/forgot-password-confirm">client.forgotPasswordConfirm.<a href="./src/resources/forgot-password-confirm.ts">confirm</a>({ ...params }) -> void</code>

# ChangePassword

Methods:

- <code title="post /v1/change-password">client.changePassword.<a href="./src/resources/change-password.ts">update</a>({ ...params }) -> void</code>

# NewPasswordRequired

Types:

- <code><a href="./src/resources/new-password-required.ts">NewPasswordRequiredRespondResponse</a></code>

Methods:

- <code title="post /v1/new-password-required">client.newPasswordRequired.<a href="./src/resources/new-password-required.ts">respond</a>({ ...params }) -> NewPasswordRequiredRespondResponse</code>
