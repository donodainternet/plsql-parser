import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { HandlerConditionCodeContext } from "./MariaDBParser";
import { HandlerConditionStateContext } from "./MariaDBParser";
import { HandlerConditionNameContext } from "./MariaDBParser";
import { HandlerConditionWarningContext } from "./MariaDBParser";
import { HandlerConditionNotfoundContext } from "./MariaDBParser";
import { HandlerConditionExceptionContext } from "./MariaDBParser";
import { LevelWeightListContext } from "./MariaDBParser";
import { LevelWeightRangeContext } from "./MariaDBParser";
import { InPredicateContext } from "./MariaDBParser";
import { IsNullPredicateContext } from "./MariaDBParser";
import { BinaryComparisonPredicateContext } from "./MariaDBParser";
import { SubqueryComparisonPredicateContext } from "./MariaDBParser";
import { BetweenPredicateContext } from "./MariaDBParser";
import { SoundsLikePredicateContext } from "./MariaDBParser";
import { LikePredicateContext } from "./MariaDBParser";
import { RegexpPredicateContext } from "./MariaDBParser";
import { ExpressionAtomPredicateContext } from "./MariaDBParser";
import { JsonMemberOfPredicateContext } from "./MariaDBParser";
import { SimpleIndexDeclarationContext } from "./MariaDBParser";
import { SpecialIndexDeclarationContext } from "./MariaDBParser";
import { UserConnectionOptionContext } from "./MariaDBParser";
import { PasswordConnectionOptionContext } from "./MariaDBParser";
import { DefaultAuthConnectionOptionContext } from "./MariaDBParser";
import { PluginDirConnectionOptionContext } from "./MariaDBParser";
import { PartitionOptionEngineContext } from "./MariaDBParser";
import { PartitionOptionCommentContext } from "./MariaDBParser";
import { PartitionOptionDataDirectoryContext } from "./MariaDBParser";
import { PartitionOptionIndexDirectoryContext } from "./MariaDBParser";
import { PartitionOptionMaxRowsContext } from "./MariaDBParser";
import { PartitionOptionMinRowsContext } from "./MariaDBParser";
import { PartitionOptionTablespaceContext } from "./MariaDBParser";
import { PartitionOptionNodeGroupContext } from "./MariaDBParser";
import { ModuleContext } from "./MariaDBParser";
import { PasswordModuleOptionContext } from "./MariaDBParser";
import { SimpleFunctionCallContext } from "./MariaDBParser";
import { DataTypeFunctionCallContext } from "./MariaDBParser";
import { ValuesFunctionCallContext } from "./MariaDBParser";
import { CaseExpressionFunctionCallContext } from "./MariaDBParser";
import { CaseFunctionCallContext } from "./MariaDBParser";
import { CharFunctionCallContext } from "./MariaDBParser";
import { PositionFunctionCallContext } from "./MariaDBParser";
import { SubstrFunctionCallContext } from "./MariaDBParser";
import { TrimFunctionCallContext } from "./MariaDBParser";
import { WeightFunctionCallContext } from "./MariaDBParser";
import { ExtractFunctionCallContext } from "./MariaDBParser";
import { GetFormatFunctionCallContext } from "./MariaDBParser";
import { JsonValueFunctionCallContext } from "./MariaDBParser";
import { DoDbReplicationContext } from "./MariaDBParser";
import { IgnoreDbReplicationContext } from "./MariaDBParser";
import { DoTableReplicationContext } from "./MariaDBParser";
import { IgnoreTableReplicationContext } from "./MariaDBParser";
import { WildDoTableReplicationContext } from "./MariaDBParser";
import { WildIgnoreTableReplicationContext } from "./MariaDBParser";
import { RewriteDbReplicationContext } from "./MariaDBParser";
import { InnerJoinContext } from "./MariaDBParser";
import { StraightJoinContext } from "./MariaDBParser";
import { OuterJoinContext } from "./MariaDBParser";
import { NaturalJoinContext } from "./MariaDBParser";
import { SetVariableContext } from "./MariaDBParser";
import { SetCharsetContext } from "./MariaDBParser";
import { SetNamesContext } from "./MariaDBParser";
import { SetPasswordContext } from "./MariaDBParser";
import { SetTransactionContext } from "./MariaDBParser";
import { SetAutocommitContext } from "./MariaDBParser";
import { SetNewValueInsideTriggerContext } from "./MariaDBParser";
import { SelectStarElementContext } from "./MariaDBParser";
import { SelectColumnElementContext } from "./MariaDBParser";
import { SelectFunctionElementContext } from "./MariaDBParser";
import { SelectExpressionElementContext } from "./MariaDBParser";
import { NotExpressionContext } from "./MariaDBParser";
import { LogicalExpressionContext } from "./MariaDBParser";
import { IsExpressionContext } from "./MariaDBParser";
import { PredicateExpressionContext } from "./MariaDBParser";
import { AtomTableItemContext } from "./MariaDBParser";
import { SubqueryTableItemContext } from "./MariaDBParser";
import { TableSourcesItemContext } from "./MariaDBParser";
import { SelectIntoVariablesContext } from "./MariaDBParser";
import { SelectIntoDumpFileContext } from "./MariaDBParser";
import { SelectIntoTextFileContext } from "./MariaDBParser";
import { AlterByTableOptionContext } from "./MariaDBParser";
import { AlterByAddColumnContext } from "./MariaDBParser";
import { AlterByAddColumnsContext } from "./MariaDBParser";
import { AlterByAddIndexContext } from "./MariaDBParser";
import { AlterByAddPrimaryKeyContext } from "./MariaDBParser";
import { AlterByAddUniqueKeyContext } from "./MariaDBParser";
import { AlterByAddSpecialIndexContext } from "./MariaDBParser";
import { AlterByAddForeignKeyContext } from "./MariaDBParser";
import { AlterByAddCheckTableConstraintContext } from "./MariaDBParser";
import { AlterBySetAlgorithmContext } from "./MariaDBParser";
import { AlterByChangeDefaultContext } from "./MariaDBParser";
import { AlterByChangeColumnContext } from "./MariaDBParser";
import { AlterByRenameColumnContext } from "./MariaDBParser";
import { AlterByLockContext } from "./MariaDBParser";
import { AlterByModifyColumnContext } from "./MariaDBParser";
import { AlterByDropColumnContext } from "./MariaDBParser";
import { AlterByDropConstraintCheckContext } from "./MariaDBParser";
import { AlterByDropPrimaryKeyContext } from "./MariaDBParser";
import { AlterByDropIndexContext } from "./MariaDBParser";
import { AlterByRenameIndexContext } from "./MariaDBParser";
import { AlterByAlterIndexVisibilityContext } from "./MariaDBParser";
import { AlterByDropForeignKeyContext } from "./MariaDBParser";
import { AlterByDisableKeysContext } from "./MariaDBParser";
import { AlterByEnableKeysContext } from "./MariaDBParser";
import { AlterByRenameContext } from "./MariaDBParser";
import { AlterByOrderContext } from "./MariaDBParser";
import { AlterByConvertCharsetContext } from "./MariaDBParser";
import { AlterByDefaultCharsetContext } from "./MariaDBParser";
import { AlterByDiscardTablespaceContext } from "./MariaDBParser";
import { AlterByImportTablespaceContext } from "./MariaDBParser";
import { AlterByForceContext } from "./MariaDBParser";
import { AlterByValidateContext } from "./MariaDBParser";
import { AlterByAddDefinitionsContext } from "./MariaDBParser";
import { AlterPartitionContext } from "./MariaDBParser";
import { AlterByAddPartitionContext } from "./MariaDBParser";
import { AlterByDropPartitionContext } from "./MariaDBParser";
import { AlterByDiscardPartitionContext } from "./MariaDBParser";
import { AlterByImportPartitionContext } from "./MariaDBParser";
import { AlterByTruncatePartitionContext } from "./MariaDBParser";
import { AlterByCoalescePartitionContext } from "./MariaDBParser";
import { AlterByReorganizePartitionContext } from "./MariaDBParser";
import { AlterByExchangePartitionContext } from "./MariaDBParser";
import { AlterByAnalyzePartitionContext } from "./MariaDBParser";
import { AlterByCheckPartitionContext } from "./MariaDBParser";
import { AlterByOptimizePartitionContext } from "./MariaDBParser";
import { AlterByRebuildPartitionContext } from "./MariaDBParser";
import { AlterByRepairPartitionContext } from "./MariaDBParser";
import { AlterByRemovePartitioningContext } from "./MariaDBParser";
import { AlterByUpgradePartitioningContext } from "./MariaDBParser";
import { SimpleSelectContext } from "./MariaDBParser";
import { ParenthesisSelectContext } from "./MariaDBParser";
import { UnionSelectContext } from "./MariaDBParser";
import { UnionParenthesisSelectContext } from "./MariaDBParser";
import { WithLateralStatementContext } from "./MariaDBParser";
import { StringDataTypeContext } from "./MariaDBParser";
import { NationalStringDataTypeContext } from "./MariaDBParser";
import { NationalVaryingStringDataTypeContext } from "./MariaDBParser";
import { DimensionDataTypeContext } from "./MariaDBParser";
import { SimpleDataTypeContext } from "./MariaDBParser";
import { CollectionDataTypeContext } from "./MariaDBParser";
import { SpatialDataTypeContext } from "./MariaDBParser";
import { LongVarcharDataTypeContext } from "./MariaDBParser";
import { LongVarbinaryDataTypeContext } from "./MariaDBParser";
import { PartitionComparisonContext } from "./MariaDBParser";
import { PartitionListAtomContext } from "./MariaDBParser";
import { PartitionListVectorContext } from "./MariaDBParser";
import { PartitionSimpleContext } from "./MariaDBParser";
import { ExplainForConnectionContext } from "./MariaDBParser";
import { NullColumnConstraintContext } from "./MariaDBParser";
import { DefaultColumnConstraintContext } from "./MariaDBParser";
import { VisibilityColumnConstraintContext } from "./MariaDBParser";
import { InvisibilityColumnConstraintContext } from "./MariaDBParser";
import { AutoIncrementColumnConstraintContext } from "./MariaDBParser";
import { PrimaryKeyColumnConstraintContext } from "./MariaDBParser";
import { UniqueKeyColumnConstraintContext } from "./MariaDBParser";
import { CommentColumnConstraintContext } from "./MariaDBParser";
import { FormatColumnConstraintContext } from "./MariaDBParser";
import { StorageColumnConstraintContext } from "./MariaDBParser";
import { ReferenceColumnConstraintContext } from "./MariaDBParser";
import { CollateColumnConstraintContext } from "./MariaDBParser";
import { GeneratedColumnConstraintContext } from "./MariaDBParser";
import { SerialDefaultColumnConstraintContext } from "./MariaDBParser";
import { CheckColumnConstraintContext } from "./MariaDBParser";
import { SubPartitionFunctionHashContext } from "./MariaDBParser";
import { SubPartitionFunctionKeyContext } from "./MariaDBParser";
import { HashAuthOptionContext } from "./MariaDBParser";
import { StringAuthOptionContext } from "./MariaDBParser";
import { ModuleAuthOptionContext } from "./MariaDBParser";
import { SimpleAuthOptionContext } from "./MariaDBParser";
import { SimpleFlushOptionContext } from "./MariaDBParser";
import { ChannelFlushOptionContext } from "./MariaDBParser";
import { TableFlushOptionContext } from "./MariaDBParser";
import { CloseCursorContext } from "./MariaDBParser";
import { FetchCursorContext } from "./MariaDBParser";
import { OpenCursorContext } from "./MariaDBParser";
import { TableSourceBaseContext } from "./MariaDBParser";
import { TableSourceNestedContext } from "./MariaDBParser";
import { TableJsonContext } from "./MariaDBParser";
import { PreciseScheduleContext } from "./MariaDBParser";
import { IntervalScheduleContext } from "./MariaDBParser";
import { PrimaryKeyTableConstraintContext } from "./MariaDBParser";
import { UniqueKeyTableConstraintContext } from "./MariaDBParser";
import { ForeignKeyTableConstraintContext } from "./MariaDBParser";
import { CheckTableConstraintContext } from "./MariaDBParser";
import { AlterUserMysqlV56Context } from "./MariaDBParser";
import { AlterUserMysqlV80Context } from "./MariaDBParser";
import { DescribeStatementsContext } from "./MariaDBParser";
import { DescribeConnectionContext } from "./MariaDBParser";
import { ColumnDeclarationContext } from "./MariaDBParser";
import { ConstraintDeclarationContext } from "./MariaDBParser";
import { IndexDeclarationContext } from "./MariaDBParser";
import { SpecificFunctionCallContext } from "./MariaDBParser";
import { AggregateFunctionCallContext } from "./MariaDBParser";
import { NonAggregateFunctionCallContext } from "./MariaDBParser";
import { ScalarFunctionCallContext } from "./MariaDBParser";
import { UdfFunctionCallContext } from "./MariaDBParser";
import { PasswordFunctionCallContext } from "./MariaDBParser";
import { TableOptionEngineContext } from "./MariaDBParser";
import { TableOptionEngineAttributeContext } from "./MariaDBParser";
import { TableOptionAutoextendSizeContext } from "./MariaDBParser";
import { TableOptionAutoIncrementContext } from "./MariaDBParser";
import { TableOptionAverageContext } from "./MariaDBParser";
import { TableOptionCharsetContext } from "./MariaDBParser";
import { TableOptionChecksumContext } from "./MariaDBParser";
import { TableOptionCollateContext } from "./MariaDBParser";
import { TableOptionCommentContext } from "./MariaDBParser";
import { TableOptionCompressionContext } from "./MariaDBParser";
import { TableOptionConnectionContext } from "./MariaDBParser";
import { TableOptionDataDirectoryContext } from "./MariaDBParser";
import { TableOptionDelayContext } from "./MariaDBParser";
import { TableOptionEncryptionContext } from "./MariaDBParser";
import { TableOptionEncryptedContext } from "./MariaDBParser";
import { TableOptionPageCompressedContext } from "./MariaDBParser";
import { TableOptionPageCompressionLevelContext } from "./MariaDBParser";
import { TableOptionEncryptionKeyIdContext } from "./MariaDBParser";
import { TableOptionIndexDirectoryContext } from "./MariaDBParser";
import { TableOptionInsertMethodContext } from "./MariaDBParser";
import { TableOptionKeyBlockSizeContext } from "./MariaDBParser";
import { TableOptionMaxRowsContext } from "./MariaDBParser";
import { TableOptionMinRowsContext } from "./MariaDBParser";
import { TableOptionPackKeysContext } from "./MariaDBParser";
import { TableOptionPasswordContext } from "./MariaDBParser";
import { TableOptionRowFormatContext } from "./MariaDBParser";
import { TableOptionStartTransactionContext } from "./MariaDBParser";
import { TableOptionSecondaryEngineAttributeContext } from "./MariaDBParser";
import { TableOptionRecalculationContext } from "./MariaDBParser";
import { TableOptionPersistentContext } from "./MariaDBParser";
import { TableOptionSamplePageContext } from "./MariaDBParser";
import { TableOptionTablespaceContext } from "./MariaDBParser";
import { TableOptionTableTypeContext } from "./MariaDBParser";
import { TableOptionTransactionalContext } from "./MariaDBParser";
import { TableOptionUnionContext } from "./MariaDBParser";
import { ConstantExpressionAtomContext } from "./MariaDBParser";
import { FullColumnNameExpressionAtomContext } from "./MariaDBParser";
import { FunctionCallExpressionAtomContext } from "./MariaDBParser";
import { CollateExpressionAtomContext } from "./MariaDBParser";
import { MysqlVariableExpressionAtomContext } from "./MariaDBParser";
import { UnaryExpressionAtomContext } from "./MariaDBParser";
import { BinaryExpressionAtomContext } from "./MariaDBParser";
import { NestedExpressionAtomContext } from "./MariaDBParser";
import { NestedRowExpressionAtomContext } from "./MariaDBParser";
import { ExistsExpressionAtomContext } from "./MariaDBParser";
import { SubqueryExpressionAtomContext } from "./MariaDBParser";
import { IntervalExpressionAtomContext } from "./MariaDBParser";
import { BitExpressionAtomContext } from "./MariaDBParser";
import { MathExpressionAtomContext } from "./MariaDBParser";
import { JsonExpressionAtomContext } from "./MariaDBParser";
import { RoutineCommentContext } from "./MariaDBParser";
import { RoutineLanguageContext } from "./MariaDBParser";
import { RoutineBehaviorContext } from "./MariaDBParser";
import { RoutineDataContext } from "./MariaDBParser";
import { RoutineSecurityContext } from "./MariaDBParser";
import { CreateUserMysqlV56Context } from "./MariaDBParser";
import { CreateUserMysqlV80Context } from "./MariaDBParser";
import { CurrentSchemaPriviLevelContext } from "./MariaDBParser";
import { GlobalPrivLevelContext } from "./MariaDBParser";
import { DefiniteSchemaPrivLevelContext } from "./MariaDBParser";
import { DefiniteFullTablePrivLevelContext } from "./MariaDBParser";
import { DefiniteFullTablePrivLevel2Context } from "./MariaDBParser";
import { DefiniteTablePrivLevelContext } from "./MariaDBParser";
import { ShowMasterLogsContext } from "./MariaDBParser";
import { ShowBinLogEventsContext } from "./MariaDBParser";
import { ShowRelayLogEventsContext } from "./MariaDBParser";
import { ShowObjectFilterContext } from "./MariaDBParser";
import { ShowColumnsContext } from "./MariaDBParser";
import { ShowCreateDbContext } from "./MariaDBParser";
import { ShowCreateFullIdObjectContext } from "./MariaDBParser";
import { ShowCreatePackageContext } from "./MariaDBParser";
import { ShowCreateUserContext } from "./MariaDBParser";
import { ShowEngineContext } from "./MariaDBParser";
import { ShowInnoDBStatusContext } from "./MariaDBParser";
import { ShowGlobalInfoContext } from "./MariaDBParser";
import { ShowErrorsContext } from "./MariaDBParser";
import { ShowCountErrorsContext } from "./MariaDBParser";
import { ShowSchemaFilterContext } from "./MariaDBParser";
import { ShowRoutineContext } from "./MariaDBParser";
import { ShowGrantsContext } from "./MariaDBParser";
import { ShowIndexesContext } from "./MariaDBParser";
import { ShowOpenTablesContext } from "./MariaDBParser";
import { ShowProfileContext } from "./MariaDBParser";
import { ShowSlaveStatusContext } from "./MariaDBParser";
import { ShowUserstatPluginContext } from "./MariaDBParser";
import { ShowExplainContext } from "./MariaDBParser";
import { ShowPackageStatusContext } from "./MariaDBParser";
import { AlterSimpleDatabaseContext } from "./MariaDBParser";
import { AlterUpgradeNameContext } from "./MariaDBParser";
import { MasterStringOptionContext } from "./MariaDBParser";
import { MasterDecimalOptionContext } from "./MariaDBParser";
import { MasterBoolOptionContext } from "./MariaDBParser";
import { MasterRealOptionContext } from "./MariaDBParser";
import { MasterUidListOptionContext } from "./MariaDBParser";
import { GtidsUntilOptionContext } from "./MariaDBParser";
import { MasterLogUntilOptionContext } from "./MariaDBParser";
import { RelayLogUntilOptionContext } from "./MariaDBParser";
import { SqlGapsUntilOptionContext } from "./MariaDBParser";
import { CopyCreateTableContext } from "./MariaDBParser";
import { QueryCreateTableContext } from "./MariaDBParser";
import { ColumnCreateTableContext } from "./MariaDBParser";
import { PartitionFunctionHashContext } from "./MariaDBParser";
import { PartitionFunctionKeyContext } from "./MariaDBParser";
import { PartitionFunctionRangeContext } from "./MariaDBParser";
import { PartitionFunctionListContext } from "./MariaDBParser";
import { DetailRevokeContext } from "./MariaDBParser";
import { ShortRevokeContext } from "./MariaDBParser";
import { RoleRevokeContext } from "./MariaDBParser";
import { RootContext } from "./MariaDBParser";
import { SqlStatementsContext } from "./MariaDBParser";
import { SqlStatementContext } from "./MariaDBParser";
import { SetStatementForContext } from "./MariaDBParser";
import { EmptyStatement_Context } from "./MariaDBParser";
import { DdlStatementContext } from "./MariaDBParser";
import { DmlStatementContext } from "./MariaDBParser";
import { TransactionStatementContext } from "./MariaDBParser";
import { ReplicationStatementContext } from "./MariaDBParser";
import { PreparedStatementContext } from "./MariaDBParser";
import { CompoundStatementContext } from "./MariaDBParser";
import { AdministrationStatementContext } from "./MariaDBParser";
import { UtilityStatementContext } from "./MariaDBParser";
import { CreateDatabaseContext } from "./MariaDBParser";
import { CreateEventContext } from "./MariaDBParser";
import { CreateIndexContext } from "./MariaDBParser";
import { CreateLogfileGroupContext } from "./MariaDBParser";
import { CreateProcedureContext } from "./MariaDBParser";
import { CreateFunctionContext } from "./MariaDBParser";
import { CreateRoleContext } from "./MariaDBParser";
import { CreateServerContext } from "./MariaDBParser";
import { CreateTableContext } from "./MariaDBParser";
import { CreateTablespaceInnodbContext } from "./MariaDBParser";
import { CreateTablespaceNdbContext } from "./MariaDBParser";
import { CreateTriggerContext } from "./MariaDBParser";
import { WithClauseContext } from "./MariaDBParser";
import { CommonTableExpressionsContext } from "./MariaDBParser";
import { CteNameContext } from "./MariaDBParser";
import { CteColumnNameContext } from "./MariaDBParser";
import { CreateViewContext } from "./MariaDBParser";
import { CreateSequenceContext } from "./MariaDBParser";
import { SequenceSpecContext } from "./MariaDBParser";
import { CreateDatabaseOptionContext } from "./MariaDBParser";
import { CharSetContext } from "./MariaDBParser";
import { CurrentUserExpressionContext } from "./MariaDBParser";
import { OwnerStatementContext } from "./MariaDBParser";
import { ScheduleExpressionContext } from "./MariaDBParser";
import { TimestampValueContext } from "./MariaDBParser";
import { IntervalExprContext } from "./MariaDBParser";
import { IntervalTypeContext } from "./MariaDBParser";
import { EnableTypeContext } from "./MariaDBParser";
import { IndexTypeContext } from "./MariaDBParser";
import { IndexOptionContext } from "./MariaDBParser";
import { ProcedureParameterContext } from "./MariaDBParser";
import { FunctionParameterContext } from "./MariaDBParser";
import { RoutineOptionContext } from "./MariaDBParser";
import { ServerOptionContext } from "./MariaDBParser";
import { CreateDefinitionsContext } from "./MariaDBParser";
import { CreateDefinitionContext } from "./MariaDBParser";
import { ColumnDefinitionContext } from "./MariaDBParser";
import { ColumnConstraintContext } from "./MariaDBParser";
import { TableConstraintContext } from "./MariaDBParser";
import { ReferenceDefinitionContext } from "./MariaDBParser";
import { ReferenceActionContext } from "./MariaDBParser";
import { ReferenceControlTypeContext } from "./MariaDBParser";
import { IndexColumnDefinitionContext } from "./MariaDBParser";
import { TableOptionContext } from "./MariaDBParser";
import { TableTypeContext } from "./MariaDBParser";
import { TablespaceStorageContext } from "./MariaDBParser";
import { PartitionDefinitionsContext } from "./MariaDBParser";
import { PartitionFunctionDefinitionContext } from "./MariaDBParser";
import { SubpartitionFunctionDefinitionContext } from "./MariaDBParser";
import { PartitionDefinitionContext } from "./MariaDBParser";
import { PartitionDefinerAtomContext } from "./MariaDBParser";
import { PartitionDefinerVectorContext } from "./MariaDBParser";
import { SubpartitionDefinitionContext } from "./MariaDBParser";
import { PartitionOptionContext } from "./MariaDBParser";
import { AlterDatabaseContext } from "./MariaDBParser";
import { AlterEventContext } from "./MariaDBParser";
import { AlterFunctionContext } from "./MariaDBParser";
import { AlterInstanceContext } from "./MariaDBParser";
import { AlterLogfileGroupContext } from "./MariaDBParser";
import { AlterProcedureContext } from "./MariaDBParser";
import { AlterServerContext } from "./MariaDBParser";
import { AlterTableContext } from "./MariaDBParser";
import { AlterTablespaceContext } from "./MariaDBParser";
import { AlterViewContext } from "./MariaDBParser";
import { AlterSequenceContext } from "./MariaDBParser";
import { AlterSpecificationContext } from "./MariaDBParser";
import { AlterPartitionSpecificationContext } from "./MariaDBParser";
import { DropDatabaseContext } from "./MariaDBParser";
import { DropEventContext } from "./MariaDBParser";
import { DropIndexContext } from "./MariaDBParser";
import { DropLogfileGroupContext } from "./MariaDBParser";
import { DropProcedureContext } from "./MariaDBParser";
import { DropFunctionContext } from "./MariaDBParser";
import { DropServerContext } from "./MariaDBParser";
import { DropTableContext } from "./MariaDBParser";
import { DropTablespaceContext } from "./MariaDBParser";
import { DropTriggerContext } from "./MariaDBParser";
import { DropViewContext } from "./MariaDBParser";
import { DropRoleContext } from "./MariaDBParser";
import { SetRoleContext } from "./MariaDBParser";
import { DropSequenceContext } from "./MariaDBParser";
import { RenameTableContext } from "./MariaDBParser";
import { RenameTableClauseContext } from "./MariaDBParser";
import { TruncateTableContext } from "./MariaDBParser";
import { CallStatementContext } from "./MariaDBParser";
import { DeleteStatementContext } from "./MariaDBParser";
import { DoStatementContext } from "./MariaDBParser";
import { HandlerStatementContext } from "./MariaDBParser";
import { InsertStatementContext } from "./MariaDBParser";
import { LoadDataStatementContext } from "./MariaDBParser";
import { LoadXmlStatementContext } from "./MariaDBParser";
import { ReplaceStatementContext } from "./MariaDBParser";
import { SelectStatementContext } from "./MariaDBParser";
import { UpdateStatementContext } from "./MariaDBParser";
import { ValuesStatementContext } from "./MariaDBParser";
import { InsertStatementValueContext } from "./MariaDBParser";
import { UpdatedElementContext } from "./MariaDBParser";
import { AssignmentFieldContext } from "./MariaDBParser";
import { LockClauseContext } from "./MariaDBParser";
import { SingleDeleteStatementContext } from "./MariaDBParser";
import { MultipleDeleteStatementContext } from "./MariaDBParser";
import { HandlerOpenStatementContext } from "./MariaDBParser";
import { HandlerReadIndexStatementContext } from "./MariaDBParser";
import { HandlerReadStatementContext } from "./MariaDBParser";
import { HandlerCloseStatementContext } from "./MariaDBParser";
import { SingleUpdateStatementContext } from "./MariaDBParser";
import { MultipleUpdateStatementContext } from "./MariaDBParser";
import { OrderByClauseContext } from "./MariaDBParser";
import { OrderByExpressionContext } from "./MariaDBParser";
import { TableSourcesContext } from "./MariaDBParser";
import { TableSourceContext } from "./MariaDBParser";
import { TableSourceItemContext } from "./MariaDBParser";
import { IndexHintContext } from "./MariaDBParser";
import { IndexHintTypeContext } from "./MariaDBParser";
import { JoinPartContext } from "./MariaDBParser";
import { QueryExpressionContext } from "./MariaDBParser";
import { QueryExpressionNointoContext } from "./MariaDBParser";
import { QuerySpecificationContext } from "./MariaDBParser";
import { QuerySpecificationNointoContext } from "./MariaDBParser";
import { UnionParenthesisContext } from "./MariaDBParser";
import { UnionStatementContext } from "./MariaDBParser";
import { LateralStatementContext } from "./MariaDBParser";
import { JsonTableContext } from "./MariaDBParser";
import { JsonColumnListContext } from "./MariaDBParser";
import { JsonColumnContext } from "./MariaDBParser";
import { JsonOnEmptyContext } from "./MariaDBParser";
import { JsonOnErrorContext } from "./MariaDBParser";
import { SelectSpecContext } from "./MariaDBParser";
import { SelectElementsContext } from "./MariaDBParser";
import { SelectElementContext } from "./MariaDBParser";
import { SelectIntoExpressionContext } from "./MariaDBParser";
import { SelectFieldsIntoContext } from "./MariaDBParser";
import { SelectLinesIntoContext } from "./MariaDBParser";
import { FromClauseContext } from "./MariaDBParser";
import { GroupByClauseContext } from "./MariaDBParser";
import { HavingClauseContext } from "./MariaDBParser";
import { WindowClauseContext } from "./MariaDBParser";
import { GroupByItemContext } from "./MariaDBParser";
import { LimitClauseContext } from "./MariaDBParser";
import { LimitClauseAtomContext } from "./MariaDBParser";
import { StartTransactionContext } from "./MariaDBParser";
import { BeginWorkContext } from "./MariaDBParser";
import { CommitWorkContext } from "./MariaDBParser";
import { RollbackWorkContext } from "./MariaDBParser";
import { SavepointStatementContext } from "./MariaDBParser";
import { RollbackStatementContext } from "./MariaDBParser";
import { ReleaseStatementContext } from "./MariaDBParser";
import { LockTablesContext } from "./MariaDBParser";
import { UnlockTablesContext } from "./MariaDBParser";
import { SetAutocommitStatementContext } from "./MariaDBParser";
import { SetTransactionStatementContext } from "./MariaDBParser";
import { TransactionModeContext } from "./MariaDBParser";
import { LockTableElementContext } from "./MariaDBParser";
import { LockActionContext } from "./MariaDBParser";
import { TransactionOptionContext } from "./MariaDBParser";
import { TransactionLevelContext } from "./MariaDBParser";
import { ChangeMasterContext } from "./MariaDBParser";
import { ChangeReplicationFilterContext } from "./MariaDBParser";
import { PurgeBinaryLogsContext } from "./MariaDBParser";
import { ResetMasterContext } from "./MariaDBParser";
import { ResetSlaveContext } from "./MariaDBParser";
import { StartSlaveContext } from "./MariaDBParser";
import { StopSlaveContext } from "./MariaDBParser";
import { StartGroupReplicationContext } from "./MariaDBParser";
import { StopGroupReplicationContext } from "./MariaDBParser";
import { MasterOptionContext } from "./MariaDBParser";
import { StringMasterOptionContext } from "./MariaDBParser";
import { DecimalMasterOptionContext } from "./MariaDBParser";
import { BoolMasterOptionContext } from "./MariaDBParser";
import { ChannelOptionContext } from "./MariaDBParser";
import { ReplicationFilterContext } from "./MariaDBParser";
import { TablePairContext } from "./MariaDBParser";
import { ThreadTypeContext } from "./MariaDBParser";
import { UntilOptionContext } from "./MariaDBParser";
import { ConnectionOptionContext } from "./MariaDBParser";
import { GtuidSetContext } from "./MariaDBParser";
import { XaStartTransactionContext } from "./MariaDBParser";
import { XaEndTransactionContext } from "./MariaDBParser";
import { XaPrepareStatementContext } from "./MariaDBParser";
import { XaCommitWorkContext } from "./MariaDBParser";
import { XaRollbackWorkContext } from "./MariaDBParser";
import { XaRecoverWorkContext } from "./MariaDBParser";
import { PrepareStatementContext } from "./MariaDBParser";
import { ExecuteStatementContext } from "./MariaDBParser";
import { DeallocatePrepareContext } from "./MariaDBParser";
import { RoutineBodyContext } from "./MariaDBParser";
import { BlockStatementContext } from "./MariaDBParser";
import { CaseStatementContext } from "./MariaDBParser";
import { IfStatementContext } from "./MariaDBParser";
import { IterateStatementContext } from "./MariaDBParser";
import { LeaveStatementContext } from "./MariaDBParser";
import { LoopStatementContext } from "./MariaDBParser";
import { RepeatStatementContext } from "./MariaDBParser";
import { ReturnStatementContext } from "./MariaDBParser";
import { WhileStatementContext } from "./MariaDBParser";
import { CursorStatementContext } from "./MariaDBParser";
import { DeclareVariableContext } from "./MariaDBParser";
import { DeclareConditionContext } from "./MariaDBParser";
import { DeclareCursorContext } from "./MariaDBParser";
import { DeclareHandlerContext } from "./MariaDBParser";
import { HandlerConditionValueContext } from "./MariaDBParser";
import { ProcedureSqlStatementContext } from "./MariaDBParser";
import { CaseAlternativeContext } from "./MariaDBParser";
import { ElifAlternativeContext } from "./MariaDBParser";
import { AlterUserContext } from "./MariaDBParser";
import { CreateUserContext } from "./MariaDBParser";
import { DropUserContext } from "./MariaDBParser";
import { GrantStatementContext } from "./MariaDBParser";
import { RoleOptionContext } from "./MariaDBParser";
import { GrantProxyContext } from "./MariaDBParser";
import { RenameUserContext } from "./MariaDBParser";
import { RevokeStatementContext } from "./MariaDBParser";
import { RevokeProxyContext } from "./MariaDBParser";
import { SetPasswordStatementContext } from "./MariaDBParser";
import { UserSpecificationContext } from "./MariaDBParser";
import { UserAuthOptionContext } from "./MariaDBParser";
import { AuthenticationRuleContext } from "./MariaDBParser";
import { TlsOptionContext } from "./MariaDBParser";
import { UserResourceOptionContext } from "./MariaDBParser";
import { UserPasswordOptionContext } from "./MariaDBParser";
import { UserLockOptionContext } from "./MariaDBParser";
import { PrivelegeClauseContext } from "./MariaDBParser";
import { PrivilegeContext } from "./MariaDBParser";
import { PrivilegeLevelContext } from "./MariaDBParser";
import { RenameUserClauseContext } from "./MariaDBParser";
import { AnalyzeTableContext } from "./MariaDBParser";
import { CheckTableContext } from "./MariaDBParser";
import { ChecksumTableContext } from "./MariaDBParser";
import { OptimizeTableContext } from "./MariaDBParser";
import { RepairTableContext } from "./MariaDBParser";
import { CheckTableOptionContext } from "./MariaDBParser";
import { CreateUdfunctionContext } from "./MariaDBParser";
import { InstallPluginContext } from "./MariaDBParser";
import { UninstallPluginContext } from "./MariaDBParser";
import { SetStatementContext } from "./MariaDBParser";
import { ShowStatementContext } from "./MariaDBParser";
import { ExplainStatementContext } from "./MariaDBParser";
import { VariableClauseContext } from "./MariaDBParser";
import { ShowCommonEntityContext } from "./MariaDBParser";
import { ShowFilterContext } from "./MariaDBParser";
import { ShowGlobalInfoClauseContext } from "./MariaDBParser";
import { ShowSchemaEntityContext } from "./MariaDBParser";
import { ShowProfileTypeContext } from "./MariaDBParser";
import { BinlogStatementContext } from "./MariaDBParser";
import { CacheIndexStatementContext } from "./MariaDBParser";
import { FlushStatementContext } from "./MariaDBParser";
import { KillStatementContext } from "./MariaDBParser";
import { LoadIndexIntoCacheContext } from "./MariaDBParser";
import { ResetStatementContext } from "./MariaDBParser";
import { ShutdownStatementContext } from "./MariaDBParser";
import { TableIndexesContext } from "./MariaDBParser";
import { FlushOptionContext } from "./MariaDBParser";
import { FlushTableOptionContext } from "./MariaDBParser";
import { LoadedTableIndexesContext } from "./MariaDBParser";
import { SimpleDescribeStatementContext } from "./MariaDBParser";
import { FullDescribeStatementContext } from "./MariaDBParser";
import { FormatJsonStatementContext } from "./MariaDBParser";
import { HelpStatementContext } from "./MariaDBParser";
import { UseStatementContext } from "./MariaDBParser";
import { SignalStatementContext } from "./MariaDBParser";
import { ResignalStatementContext } from "./MariaDBParser";
import { SignalConditionInformationContext } from "./MariaDBParser";
import { DiagnosticsStatementContext } from "./MariaDBParser";
import { DiagnosticsConditionInformationNameContext } from "./MariaDBParser";
import { DescribeObjectClauseContext } from "./MariaDBParser";
import { FullIdContext } from "./MariaDBParser";
import { TableNameContext } from "./MariaDBParser";
import { RoleNameContext } from "./MariaDBParser";
import { FullColumnNameContext } from "./MariaDBParser";
import { IndexColumnNameContext } from "./MariaDBParser";
import { UserNameContext } from "./MariaDBParser";
import { MysqlVariableContext } from "./MariaDBParser";
import { CharsetNameContext } from "./MariaDBParser";
import { CollationNameContext } from "./MariaDBParser";
import { EngineNameContext } from "./MariaDBParser";
import { EngineNameBaseContext } from "./MariaDBParser";
import { EncryptedLiteralContext } from "./MariaDBParser";
import { UuidSetContext } from "./MariaDBParser";
import { XidContext } from "./MariaDBParser";
import { XuidStringIdContext } from "./MariaDBParser";
import { AuthPluginContext } from "./MariaDBParser";
import { UidContext } from "./MariaDBParser";
import { SimpleIdContext } from "./MariaDBParser";
import { DottedIdContext } from "./MariaDBParser";
import { DecimalLiteralContext } from "./MariaDBParser";
import { FileSizeLiteralContext } from "./MariaDBParser";
import { StringLiteralContext } from "./MariaDBParser";
import { BooleanLiteralContext } from "./MariaDBParser";
import { HexadecimalLiteralContext } from "./MariaDBParser";
import { NullNotnullContext } from "./MariaDBParser";
import { ConstantContext } from "./MariaDBParser";
import { DataTypeContext } from "./MariaDBParser";
import { CollectionOptionsContext } from "./MariaDBParser";
import { ConvertedDataTypeContext } from "./MariaDBParser";
import { LengthOneDimensionContext } from "./MariaDBParser";
import { LengthTwoDimensionContext } from "./MariaDBParser";
import { LengthTwoOptionalDimensionContext } from "./MariaDBParser";
import { UidListContext } from "./MariaDBParser";
import { TablesContext } from "./MariaDBParser";
import { IndexColumnNamesContext } from "./MariaDBParser";
import { ExpressionsContext } from "./MariaDBParser";
import { ExpressionsWithDefaultsContext } from "./MariaDBParser";
import { ConstantsContext } from "./MariaDBParser";
import { SimpleStringsContext } from "./MariaDBParser";
import { UserVariablesContext } from "./MariaDBParser";
import { DefaultValueContext } from "./MariaDBParser";
import { CurrentTimestampContext } from "./MariaDBParser";
import { ExpressionOrDefaultContext } from "./MariaDBParser";
import { IfExistsContext } from "./MariaDBParser";
import { IfNotExistsContext } from "./MariaDBParser";
import { OrReplaceContext } from "./MariaDBParser";
import { WaitNowaitClauseContext } from "./MariaDBParser";
import { LockOptionContext } from "./MariaDBParser";
import { FunctionCallContext } from "./MariaDBParser";
import { SpecificFunctionContext } from "./MariaDBParser";
import { CaseFuncAlternativeContext } from "./MariaDBParser";
import { LevelsInWeightStringContext } from "./MariaDBParser";
import { LevelInWeightListElementContext } from "./MariaDBParser";
import { AggregateWindowedFunctionContext } from "./MariaDBParser";
import { NonAggregateWindowedFunctionContext } from "./MariaDBParser";
import { OverClauseContext } from "./MariaDBParser";
import { WindowSpecContext } from "./MariaDBParser";
import { WindowNameContext } from "./MariaDBParser";
import { FrameClauseContext } from "./MariaDBParser";
import { FrameUnitsContext } from "./MariaDBParser";
import { FrameExtentContext } from "./MariaDBParser";
import { FrameBetweenContext } from "./MariaDBParser";
import { FrameRangeContext } from "./MariaDBParser";
import { PartitionClauseContext } from "./MariaDBParser";
import { ScalarFunctionNameContext } from "./MariaDBParser";
import { PasswordFunctionClauseContext } from "./MariaDBParser";
import { FunctionArgsContext } from "./MariaDBParser";
import { FunctionArgContext } from "./MariaDBParser";
import { ExpressionContext } from "./MariaDBParser";
import { PredicateContext } from "./MariaDBParser";
import { ExpressionAtomContext } from "./MariaDBParser";
import { UnaryOperatorContext } from "./MariaDBParser";
import { ComparisonOperatorContext } from "./MariaDBParser";
import { LogicalOperatorContext } from "./MariaDBParser";
import { BitOperatorContext } from "./MariaDBParser";
import { MathOperatorContext } from "./MariaDBParser";
import { JsonOperatorContext } from "./MariaDBParser";
import { CharsetNameBaseContext } from "./MariaDBParser";
import { TransactionLevelBaseContext } from "./MariaDBParser";
import { PrivilegesBaseContext } from "./MariaDBParser";
import { IntervalTypeBaseContext } from "./MariaDBParser";
import { DataTypeBaseContext } from "./MariaDBParser";
import { KeywordsCanBeIdContext } from "./MariaDBParser";
import { FunctionNameBaseContext } from "./MariaDBParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `MariaDBParser`.
 */
export interface MariaDBParserListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by the `handlerConditionCode`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionCode`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionState`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionState?: (ctx: HandlerConditionStateContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionState`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionState?: (ctx: HandlerConditionStateContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionName`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionName?: (ctx: HandlerConditionNameContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionName`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionName?: (ctx: HandlerConditionNameContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionWarning`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionWarning`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionNotfound`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionNotfound`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionException`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionException`
     * labeled alternative in `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => void;
    /**
     * Enter a parse tree produced by the `levelWeightList`
     * labeled alternative in `MariaDBParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    enterLevelWeightList?: (ctx: LevelWeightListContext) => void;
    /**
     * Exit a parse tree produced by the `levelWeightList`
     * labeled alternative in `MariaDBParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    exitLevelWeightList?: (ctx: LevelWeightListContext) => void;
    /**
     * Enter a parse tree produced by the `levelWeightRange`
     * labeled alternative in `MariaDBParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    enterLevelWeightRange?: (ctx: LevelWeightRangeContext) => void;
    /**
     * Exit a parse tree produced by the `levelWeightRange`
     * labeled alternative in `MariaDBParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    exitLevelWeightRange?: (ctx: LevelWeightRangeContext) => void;
    /**
     * Enter a parse tree produced by the `inPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterInPredicate?: (ctx: InPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `inPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitInPredicate?: (ctx: InPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `isNullPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterIsNullPredicate?: (ctx: IsNullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `isNullPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitIsNullPredicate?: (ctx: IsNullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `binaryComparisonPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterBinaryComparisonPredicate?: (ctx: BinaryComparisonPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `binaryComparisonPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitBinaryComparisonPredicate?: (ctx: BinaryComparisonPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryComparisonPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterSubqueryComparisonPredicate?: (ctx: SubqueryComparisonPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryComparisonPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitSubqueryComparisonPredicate?: (ctx: SubqueryComparisonPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `betweenPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `betweenPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `soundsLikePredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => void;
    /**
     * Exit a parse tree produced by the `soundsLikePredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `likePredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Exit a parse tree produced by the `likePredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `regexpPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterRegexpPredicate?: (ctx: RegexpPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `regexpPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitRegexpPredicate?: (ctx: RegexpPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `expressionAtomPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `expressionAtomPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `jsonMemberOfPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterJsonMemberOfPredicate?: (ctx: JsonMemberOfPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `jsonMemberOfPredicate`
     * labeled alternative in `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitJsonMemberOfPredicate?: (ctx: JsonMemberOfPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `simpleIndexDeclaration`
     * labeled alternative in `MariaDBParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    enterSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `simpleIndexDeclaration`
     * labeled alternative in `MariaDBParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    exitSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `specialIndexDeclaration`
     * labeled alternative in `MariaDBParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    enterSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `specialIndexDeclaration`
     * labeled alternative in `MariaDBParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    exitSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `userConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterUserConnectionOption?: (ctx: UserConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `userConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitUserConnectionOption?: (ctx: UserConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `passwordConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `passwordConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `defaultAuthConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `defaultAuthConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `pluginDirConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `pluginDirConnectionOption`
     * labeled alternative in `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionEngine`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionEngine`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionComment`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionComment`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionDataDirectory`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionDataDirectory`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionIndexDirectory`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionIndexDirectory`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionMaxRows`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionMaxRows`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionMinRows`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionMinRows`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionTablespace`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionTablespace`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionNodeGroup`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionNodeGroup`
     * labeled alternative in `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => void;
    /**
     * Enter a parse tree produced by the `module`
     * labeled alternative in `MariaDBParser.authenticationRule`.
     * @param ctx the parse tree
     */
    enterModule?: (ctx: ModuleContext) => void;
    /**
     * Exit a parse tree produced by the `module`
     * labeled alternative in `MariaDBParser.authenticationRule`.
     * @param ctx the parse tree
     */
    exitModule?: (ctx: ModuleContext) => void;
    /**
     * Enter a parse tree produced by the `passwordModuleOption`
     * labeled alternative in `MariaDBParser.authenticationRule`.
     * @param ctx the parse tree
     */
    enterPasswordModuleOption?: (ctx: PasswordModuleOptionContext) => void;
    /**
     * Exit a parse tree produced by the `passwordModuleOption`
     * labeled alternative in `MariaDBParser.authenticationRule`.
     * @param ctx the parse tree
     */
    exitPasswordModuleOption?: (ctx: PasswordModuleOptionContext) => void;
    /**
     * Enter a parse tree produced by the `simpleFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `simpleFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `dataTypeFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `dataTypeFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `valuesFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `valuesFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `caseExpressionFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCaseExpressionFunctionCall?: (ctx: CaseExpressionFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `caseExpressionFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCaseExpressionFunctionCall?: (ctx: CaseExpressionFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `caseFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCaseFunctionCall?: (ctx: CaseFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `caseFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCaseFunctionCall?: (ctx: CaseFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `charFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCharFunctionCall?: (ctx: CharFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `charFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCharFunctionCall?: (ctx: CharFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `positionFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterPositionFunctionCall?: (ctx: PositionFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `positionFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitPositionFunctionCall?: (ctx: PositionFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `substrFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `substrFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `trimFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterTrimFunctionCall?: (ctx: TrimFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `trimFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitTrimFunctionCall?: (ctx: TrimFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `weightFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterWeightFunctionCall?: (ctx: WeightFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `weightFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitWeightFunctionCall?: (ctx: WeightFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `extractFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `extractFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `getFormatFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `getFormatFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `jsonValueFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterJsonValueFunctionCall?: (ctx: JsonValueFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `jsonValueFunctionCall`
     * labeled alternative in `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitJsonValueFunctionCall?: (ctx: JsonValueFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `doDbReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterDoDbReplication?: (ctx: DoDbReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `doDbReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitDoDbReplication?: (ctx: DoDbReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `ignoreDbReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `ignoreDbReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `doTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterDoTableReplication?: (ctx: DoTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `doTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitDoTableReplication?: (ctx: DoTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `ignoreTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `ignoreTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `wildDoTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `wildDoTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `wildIgnoreTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `wildIgnoreTableReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `rewriteDbReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `rewriteDbReplication`
     * labeled alternative in `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `innerJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    enterInnerJoin?: (ctx: InnerJoinContext) => void;
    /**
     * Exit a parse tree produced by the `innerJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    exitInnerJoin?: (ctx: InnerJoinContext) => void;
    /**
     * Enter a parse tree produced by the `straightJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    enterStraightJoin?: (ctx: StraightJoinContext) => void;
    /**
     * Exit a parse tree produced by the `straightJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    exitStraightJoin?: (ctx: StraightJoinContext) => void;
    /**
     * Enter a parse tree produced by the `outerJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    enterOuterJoin?: (ctx: OuterJoinContext) => void;
    /**
     * Exit a parse tree produced by the `outerJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    exitOuterJoin?: (ctx: OuterJoinContext) => void;
    /**
     * Enter a parse tree produced by the `naturalJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    enterNaturalJoin?: (ctx: NaturalJoinContext) => void;
    /**
     * Exit a parse tree produced by the `naturalJoin`
     * labeled alternative in `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    exitNaturalJoin?: (ctx: NaturalJoinContext) => void;
    /**
     * Enter a parse tree produced by the `setVariable`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetVariable?: (ctx: SetVariableContext) => void;
    /**
     * Exit a parse tree produced by the `setVariable`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetVariable?: (ctx: SetVariableContext) => void;
    /**
     * Enter a parse tree produced by the `setCharset`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetCharset?: (ctx: SetCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `setCharset`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetCharset?: (ctx: SetCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `setNames`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetNames?: (ctx: SetNamesContext) => void;
    /**
     * Exit a parse tree produced by the `setNames`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetNames?: (ctx: SetNamesContext) => void;
    /**
     * Enter a parse tree produced by the `setPassword`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetPassword?: (ctx: SetPasswordContext) => void;
    /**
     * Exit a parse tree produced by the `setPassword`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetPassword?: (ctx: SetPasswordContext) => void;
    /**
     * Enter a parse tree produced by the `setTransaction`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetTransaction?: (ctx: SetTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `setTransaction`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetTransaction?: (ctx: SetTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `setAutocommit`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetAutocommit?: (ctx: SetAutocommitContext) => void;
    /**
     * Exit a parse tree produced by the `setAutocommit`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetAutocommit?: (ctx: SetAutocommitContext) => void;
    /**
     * Enter a parse tree produced by the `setNewValueInsideTrigger`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => void;
    /**
     * Exit a parse tree produced by the `setNewValueInsideTrigger`
     * labeled alternative in `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => void;
    /**
     * Enter a parse tree produced by the `selectStarElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectStarElement?: (ctx: SelectStarElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectStarElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectStarElement?: (ctx: SelectStarElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectColumnElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectColumnElement?: (ctx: SelectColumnElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectColumnElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectColumnElement?: (ctx: SelectColumnElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectFunctionElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectFunctionElement?: (ctx: SelectFunctionElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectFunctionElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectFunctionElement?: (ctx: SelectFunctionElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectExpressionElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectExpressionElement?: (ctx: SelectExpressionElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectExpressionElement`
     * labeled alternative in `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectExpressionElement?: (ctx: SelectExpressionElementContext) => void;
    /**
     * Enter a parse tree produced by the `notExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    enterNotExpression?: (ctx: NotExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `notExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    exitNotExpression?: (ctx: NotExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `logicalExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `isExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    enterIsExpression?: (ctx: IsExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `isExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    exitIsExpression?: (ctx: IsExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `predicateExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    enterPredicateExpression?: (ctx: PredicateExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `predicateExpression`
     * labeled alternative in `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    exitPredicateExpression?: (ctx: PredicateExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `atomTableItem`
     * labeled alternative in `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterAtomTableItem?: (ctx: AtomTableItemContext) => void;
    /**
     * Exit a parse tree produced by the `atomTableItem`
     * labeled alternative in `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitAtomTableItem?: (ctx: AtomTableItemContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryTableItem`
     * labeled alternative in `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterSubqueryTableItem?: (ctx: SubqueryTableItemContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryTableItem`
     * labeled alternative in `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitSubqueryTableItem?: (ctx: SubqueryTableItemContext) => void;
    /**
     * Enter a parse tree produced by the `tableSourcesItem`
     * labeled alternative in `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterTableSourcesItem?: (ctx: TableSourcesItemContext) => void;
    /**
     * Exit a parse tree produced by the `tableSourcesItem`
     * labeled alternative in `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitTableSourcesItem?: (ctx: TableSourcesItemContext) => void;
    /**
     * Enter a parse tree produced by the `selectIntoVariables`
     * labeled alternative in `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => void;
    /**
     * Exit a parse tree produced by the `selectIntoVariables`
     * labeled alternative in `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => void;
    /**
     * Enter a parse tree produced by the `selectIntoDumpFile`
     * labeled alternative in `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => void;
    /**
     * Exit a parse tree produced by the `selectIntoDumpFile`
     * labeled alternative in `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => void;
    /**
     * Enter a parse tree produced by the `selectIntoTextFile`
     * labeled alternative in `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => void;
    /**
     * Exit a parse tree produced by the `selectIntoTextFile`
     * labeled alternative in `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => void;
    /**
     * Enter a parse tree produced by the `alterByTableOption`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByTableOption?: (ctx: AlterByTableOptionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByTableOption`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByTableOption?: (ctx: AlterByTableOptionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddColumn?: (ctx: AlterByAddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddColumn?: (ctx: AlterByAddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddColumns`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddColumns`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddIndex?: (ctx: AlterByAddIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddIndex?: (ctx: AlterByAddIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddPrimaryKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddPrimaryKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddUniqueKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddUniqueKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddSpecialIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddSpecialIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddForeignKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddForeignKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddCheckTableConstraint`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddCheckTableConstraint`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `alterBySetAlgorithm`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => void;
    /**
     * Exit a parse tree produced by the `alterBySetAlgorithm`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => void;
    /**
     * Enter a parse tree produced by the `alterByChangeDefault`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `alterByChangeDefault`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `alterByChangeColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByChangeColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRenameColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRenameColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByLock`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByLock?: (ctx: AlterByLockContext) => void;
    /**
     * Exit a parse tree produced by the `alterByLock`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByLock?: (ctx: AlterByLockContext) => void;
    /**
     * Enter a parse tree produced by the `alterByModifyColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByModifyColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropColumn?: (ctx: AlterByDropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropColumn`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropColumn?: (ctx: AlterByDropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropConstraintCheck`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropConstraintCheck?: (ctx: AlterByDropConstraintCheckContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropConstraintCheck`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropConstraintCheck?: (ctx: AlterByDropConstraintCheckContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropPrimaryKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropPrimaryKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropIndex?: (ctx: AlterByDropIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropIndex?: (ctx: AlterByDropIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRenameIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRenameIndex`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAlterIndexVisibility`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAlterIndexVisibility`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropForeignKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropForeignKey`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDisableKeys`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDisableKeys`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => void;
    /**
     * Enter a parse tree produced by the `alterByEnableKeys`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => void;
    /**
     * Exit a parse tree produced by the `alterByEnableKeys`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRename`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRename?: (ctx: AlterByRenameContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRename`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRename?: (ctx: AlterByRenameContext) => void;
    /**
     * Enter a parse tree produced by the `alterByOrder`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByOrder?: (ctx: AlterByOrderContext) => void;
    /**
     * Exit a parse tree produced by the `alterByOrder`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByOrder?: (ctx: AlterByOrderContext) => void;
    /**
     * Enter a parse tree produced by the `alterByConvertCharset`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `alterByConvertCharset`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDefaultCharset`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDefaultCharset`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDiscardTablespace`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDiscardTablespace`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `alterByImportTablespace`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `alterByImportTablespace`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `alterByForce`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByForce?: (ctx: AlterByForceContext) => void;
    /**
     * Exit a parse tree produced by the `alterByForce`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByForce?: (ctx: AlterByForceContext) => void;
    /**
     * Enter a parse tree produced by the `alterByValidate`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByValidate?: (ctx: AlterByValidateContext) => void;
    /**
     * Exit a parse tree produced by the `alterByValidate`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByValidate?: (ctx: AlterByValidateContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddDefinitions`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddDefinitions?: (ctx: AlterByAddDefinitionsContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddDefinitions`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddDefinitions?: (ctx: AlterByAddDefinitionsContext) => void;
    /**
     * Enter a parse tree produced by the `alterPartition`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterPartition?: (ctx: AlterPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterPartition`
     * labeled alternative in `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterPartition?: (ctx: AlterPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDiscardPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDiscardPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByImportPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByImportPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByTruncatePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByTruncatePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByCoalescePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByCoalescePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByReorganizePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByReorganizePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByExchangePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByExchangePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAnalyzePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAnalyzePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByCheckPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByCheckPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByOptimizePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByOptimizePartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRebuildPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRebuildPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRepairPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRepairPartition`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRemovePartitioning`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRemovePartitioning`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => void;
    /**
     * Enter a parse tree produced by the `alterByUpgradePartitioning`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => void;
    /**
     * Exit a parse tree produced by the `alterByUpgradePartitioning`
     * labeled alternative in `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => void;
    /**
     * Enter a parse tree produced by the `simpleSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSimpleSelect?: (ctx: SimpleSelectContext) => void;
    /**
     * Exit a parse tree produced by the `simpleSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSimpleSelect?: (ctx: SimpleSelectContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesisSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterParenthesisSelect?: (ctx: ParenthesisSelectContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesisSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitParenthesisSelect?: (ctx: ParenthesisSelectContext) => void;
    /**
     * Enter a parse tree produced by the `unionSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterUnionSelect?: (ctx: UnionSelectContext) => void;
    /**
     * Exit a parse tree produced by the `unionSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitUnionSelect?: (ctx: UnionSelectContext) => void;
    /**
     * Enter a parse tree produced by the `unionParenthesisSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => void;
    /**
     * Exit a parse tree produced by the `unionParenthesisSelect`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => void;
    /**
     * Enter a parse tree produced by the `withLateralStatement`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterWithLateralStatement?: (ctx: WithLateralStatementContext) => void;
    /**
     * Exit a parse tree produced by the `withLateralStatement`
     * labeled alternative in `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitWithLateralStatement?: (ctx: WithLateralStatementContext) => void;
    /**
     * Enter a parse tree produced by the `stringDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterStringDataType?: (ctx: StringDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `stringDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitStringDataType?: (ctx: StringDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `nationalStringDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterNationalStringDataType?: (ctx: NationalStringDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `nationalStringDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitNationalStringDataType?: (ctx: NationalStringDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `nationalVaryingStringDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `nationalVaryingStringDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `dimensionDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterDimensionDataType?: (ctx: DimensionDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `dimensionDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitDimensionDataType?: (ctx: DimensionDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `simpleDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterSimpleDataType?: (ctx: SimpleDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `simpleDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitSimpleDataType?: (ctx: SimpleDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `collectionDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterCollectionDataType?: (ctx: CollectionDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `collectionDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitCollectionDataType?: (ctx: CollectionDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `spatialDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterSpatialDataType?: (ctx: SpatialDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `spatialDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitSpatialDataType?: (ctx: SpatialDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `longVarcharDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `longVarcharDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `longVarbinaryDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `longVarbinaryDataType`
     * labeled alternative in `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `partitionComparison`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionComparison?: (ctx: PartitionComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `partitionComparison`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionComparison?: (ctx: PartitionComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `partitionListAtom`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionListAtom?: (ctx: PartitionListAtomContext) => void;
    /**
     * Exit a parse tree produced by the `partitionListAtom`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionListAtom?: (ctx: PartitionListAtomContext) => void;
    /**
     * Enter a parse tree produced by the `partitionListVector`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionListVector?: (ctx: PartitionListVectorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionListVector`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionListVector?: (ctx: PartitionListVectorContext) => void;
    /**
     * Enter a parse tree produced by the `partitionSimple`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionSimple?: (ctx: PartitionSimpleContext) => void;
    /**
     * Exit a parse tree produced by the `partitionSimple`
     * labeled alternative in `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionSimple?: (ctx: PartitionSimpleContext) => void;
    /**
     * Enter a parse tree produced by the `explainForConnection`
     * labeled alternative in `MariaDBParser.explainStatement`.
     * @param ctx the parse tree
     */
    enterExplainForConnection?: (ctx: ExplainForConnectionContext) => void;
    /**
     * Exit a parse tree produced by the `explainForConnection`
     * labeled alternative in `MariaDBParser.explainStatement`.
     * @param ctx the parse tree
     */
    exitExplainForConnection?: (ctx: ExplainForConnectionContext) => void;
    /**
     * Enter a parse tree produced by the `nullColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterNullColumnConstraint?: (ctx: NullColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `nullColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitNullColumnConstraint?: (ctx: NullColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `defaultColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `defaultColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `visibilityColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterVisibilityColumnConstraint?: (ctx: VisibilityColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `visibilityColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitVisibilityColumnConstraint?: (ctx: VisibilityColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `invisibilityColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterInvisibilityColumnConstraint?: (ctx: InvisibilityColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `invisibilityColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitInvisibilityColumnConstraint?: (ctx: InvisibilityColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `autoIncrementColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `autoIncrementColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `primaryKeyColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `primaryKeyColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `uniqueKeyColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `uniqueKeyColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `commentColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `commentColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `formatColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `formatColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `storageColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `storageColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `referenceColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `referenceColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `collateColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `collateColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `generatedColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `generatedColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `serialDefaultColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `serialDefaultColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `checkColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `checkColumnConstraint`
     * labeled alternative in `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `subPartitionFunctionHash`
     * labeled alternative in `MariaDBParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => void;
    /**
     * Exit a parse tree produced by the `subPartitionFunctionHash`
     * labeled alternative in `MariaDBParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => void;
    /**
     * Enter a parse tree produced by the `subPartitionFunctionKey`
     * labeled alternative in `MariaDBParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => void;
    /**
     * Exit a parse tree produced by the `subPartitionFunctionKey`
     * labeled alternative in `MariaDBParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => void;
    /**
     * Enter a parse tree produced by the `hashAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterHashAuthOption?: (ctx: HashAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `hashAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitHashAuthOption?: (ctx: HashAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `stringAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterStringAuthOption?: (ctx: StringAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `stringAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitStringAuthOption?: (ctx: StringAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `moduleAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterModuleAuthOption?: (ctx: ModuleAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `moduleAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitModuleAuthOption?: (ctx: ModuleAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `simpleAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `simpleAuthOption`
     * labeled alternative in `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `simpleFlushOption`
     * labeled alternative in `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    enterSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => void;
    /**
     * Exit a parse tree produced by the `simpleFlushOption`
     * labeled alternative in `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    exitSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => void;
    /**
     * Enter a parse tree produced by the `channelFlushOption`
     * labeled alternative in `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    enterChannelFlushOption?: (ctx: ChannelFlushOptionContext) => void;
    /**
     * Exit a parse tree produced by the `channelFlushOption`
     * labeled alternative in `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    exitChannelFlushOption?: (ctx: ChannelFlushOptionContext) => void;
    /**
     * Enter a parse tree produced by the `tableFlushOption`
     * labeled alternative in `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    enterTableFlushOption?: (ctx: TableFlushOptionContext) => void;
    /**
     * Exit a parse tree produced by the `tableFlushOption`
     * labeled alternative in `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    exitTableFlushOption?: (ctx: TableFlushOptionContext) => void;
    /**
     * Enter a parse tree produced by the `CloseCursor`
     * labeled alternative in `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterCloseCursor?: (ctx: CloseCursorContext) => void;
    /**
     * Exit a parse tree produced by the `CloseCursor`
     * labeled alternative in `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitCloseCursor?: (ctx: CloseCursorContext) => void;
    /**
     * Enter a parse tree produced by the `FetchCursor`
     * labeled alternative in `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterFetchCursor?: (ctx: FetchCursorContext) => void;
    /**
     * Exit a parse tree produced by the `FetchCursor`
     * labeled alternative in `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitFetchCursor?: (ctx: FetchCursorContext) => void;
    /**
     * Enter a parse tree produced by the `OpenCursor`
     * labeled alternative in `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterOpenCursor?: (ctx: OpenCursorContext) => void;
    /**
     * Exit a parse tree produced by the `OpenCursor`
     * labeled alternative in `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitOpenCursor?: (ctx: OpenCursorContext) => void;
    /**
     * Enter a parse tree produced by the `tableSourceBase`
     * labeled alternative in `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSourceBase?: (ctx: TableSourceBaseContext) => void;
    /**
     * Exit a parse tree produced by the `tableSourceBase`
     * labeled alternative in `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSourceBase?: (ctx: TableSourceBaseContext) => void;
    /**
     * Enter a parse tree produced by the `tableSourceNested`
     * labeled alternative in `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSourceNested?: (ctx: TableSourceNestedContext) => void;
    /**
     * Exit a parse tree produced by the `tableSourceNested`
     * labeled alternative in `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSourceNested?: (ctx: TableSourceNestedContext) => void;
    /**
     * Enter a parse tree produced by the `tableJson`
     * labeled alternative in `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableJson?: (ctx: TableJsonContext) => void;
    /**
     * Exit a parse tree produced by the `tableJson`
     * labeled alternative in `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableJson?: (ctx: TableJsonContext) => void;
    /**
     * Enter a parse tree produced by the `preciseSchedule`
     * labeled alternative in `MariaDBParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    enterPreciseSchedule?: (ctx: PreciseScheduleContext) => void;
    /**
     * Exit a parse tree produced by the `preciseSchedule`
     * labeled alternative in `MariaDBParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    exitPreciseSchedule?: (ctx: PreciseScheduleContext) => void;
    /**
     * Enter a parse tree produced by the `intervalSchedule`
     * labeled alternative in `MariaDBParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    enterIntervalSchedule?: (ctx: IntervalScheduleContext) => void;
    /**
     * Exit a parse tree produced by the `intervalSchedule`
     * labeled alternative in `MariaDBParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    exitIntervalSchedule?: (ctx: IntervalScheduleContext) => void;
    /**
     * Enter a parse tree produced by the `primaryKeyTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `primaryKeyTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `uniqueKeyTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `uniqueKeyTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `foreignKeyTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `foreignKeyTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `checkTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterCheckTableConstraint?: (ctx: CheckTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `checkTableConstraint`
     * labeled alternative in `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitCheckTableConstraint?: (ctx: CheckTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `alterUserMysqlV56`
     * labeled alternative in `MariaDBParser.alterUser`.
     * @param ctx the parse tree
     */
    enterAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => void;
    /**
     * Exit a parse tree produced by the `alterUserMysqlV56`
     * labeled alternative in `MariaDBParser.alterUser`.
     * @param ctx the parse tree
     */
    exitAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => void;
    /**
     * Enter a parse tree produced by the `alterUserMysqlV80`
     * labeled alternative in `MariaDBParser.alterUser`.
     * @param ctx the parse tree
     */
    enterAlterUserMysqlV80?: (ctx: AlterUserMysqlV80Context) => void;
    /**
     * Exit a parse tree produced by the `alterUserMysqlV80`
     * labeled alternative in `MariaDBParser.alterUser`.
     * @param ctx the parse tree
     */
    exitAlterUserMysqlV80?: (ctx: AlterUserMysqlV80Context) => void;
    /**
     * Enter a parse tree produced by the `describeStatements`
     * labeled alternative in `MariaDBParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    enterDescribeStatements?: (ctx: DescribeStatementsContext) => void;
    /**
     * Exit a parse tree produced by the `describeStatements`
     * labeled alternative in `MariaDBParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    exitDescribeStatements?: (ctx: DescribeStatementsContext) => void;
    /**
     * Enter a parse tree produced by the `describeConnection`
     * labeled alternative in `MariaDBParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    enterDescribeConnection?: (ctx: DescribeConnectionContext) => void;
    /**
     * Exit a parse tree produced by the `describeConnection`
     * labeled alternative in `MariaDBParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    exitDescribeConnection?: (ctx: DescribeConnectionContext) => void;
    /**
     * Enter a parse tree produced by the `columnDeclaration`
     * labeled alternative in `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDeclaration?: (ctx: ColumnDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `columnDeclaration`
     * labeled alternative in `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDeclaration?: (ctx: ColumnDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `constraintDeclaration`
     * labeled alternative in `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `constraintDeclaration`
     * labeled alternative in `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `indexDeclaration`
     * labeled alternative in `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterIndexDeclaration?: (ctx: IndexDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `indexDeclaration`
     * labeled alternative in `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitIndexDeclaration?: (ctx: IndexDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `specificFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `specificFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `aggregateFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `aggregateFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `nonAggregateFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterNonAggregateFunctionCall?: (ctx: NonAggregateFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `nonAggregateFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitNonAggregateFunctionCall?: (ctx: NonAggregateFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `scalarFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `scalarFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `udfFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterUdfFunctionCall?: (ctx: UdfFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `udfFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitUdfFunctionCall?: (ctx: UdfFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `passwordFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `passwordFunctionCall`
     * labeled alternative in `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEngine`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEngine?: (ctx: TableOptionEngineContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEngine`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEngine?: (ctx: TableOptionEngineContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEngineAttribute`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEngineAttribute?: (ctx: TableOptionEngineAttributeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEngineAttribute`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEngineAttribute?: (ctx: TableOptionEngineAttributeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionAutoextendSize`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionAutoextendSize?: (ctx: TableOptionAutoextendSizeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionAutoextendSize`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionAutoextendSize?: (ctx: TableOptionAutoextendSizeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionAutoIncrement`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionAutoIncrement`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionAverage`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionAverage?: (ctx: TableOptionAverageContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionAverage`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionAverage?: (ctx: TableOptionAverageContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionCharset`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionCharset?: (ctx: TableOptionCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionCharset`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionCharset?: (ctx: TableOptionCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionChecksum`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionChecksum?: (ctx: TableOptionChecksumContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionChecksum`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionChecksum?: (ctx: TableOptionChecksumContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionCollate`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionCollate?: (ctx: TableOptionCollateContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionCollate`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionCollate?: (ctx: TableOptionCollateContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionComment`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionComment?: (ctx: TableOptionCommentContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionComment`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionComment?: (ctx: TableOptionCommentContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionCompression`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionCompression?: (ctx: TableOptionCompressionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionCompression`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionCompression?: (ctx: TableOptionCompressionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionConnection`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionConnection?: (ctx: TableOptionConnectionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionConnection`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionConnection?: (ctx: TableOptionConnectionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionDataDirectory`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionDataDirectory`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionDelay`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionDelay?: (ctx: TableOptionDelayContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionDelay`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionDelay?: (ctx: TableOptionDelayContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEncryption`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEncryption`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEncrypted`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEncrypted?: (ctx: TableOptionEncryptedContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEncrypted`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEncrypted?: (ctx: TableOptionEncryptedContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPageCompressed`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPageCompressed?: (ctx: TableOptionPageCompressedContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPageCompressed`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPageCompressed?: (ctx: TableOptionPageCompressedContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPageCompressionLevel`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPageCompressionLevel?: (ctx: TableOptionPageCompressionLevelContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPageCompressionLevel`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPageCompressionLevel?: (ctx: TableOptionPageCompressionLevelContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEncryptionKeyId`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEncryptionKeyId?: (ctx: TableOptionEncryptionKeyIdContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEncryptionKeyId`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEncryptionKeyId?: (ctx: TableOptionEncryptionKeyIdContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionIndexDirectory`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionIndexDirectory`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionInsertMethod`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionInsertMethod`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionKeyBlockSize`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionKeyBlockSize`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionMaxRows`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionMaxRows`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionMinRows`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionMinRows`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPackKeys`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPackKeys`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPassword`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPassword?: (ctx: TableOptionPasswordContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPassword`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPassword?: (ctx: TableOptionPasswordContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionRowFormat`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionRowFormat`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionStartTransaction`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionStartTransaction?: (ctx: TableOptionStartTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionStartTransaction`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionStartTransaction?: (ctx: TableOptionStartTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionSecondaryEngineAttribute`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionSecondaryEngineAttribute?: (ctx: TableOptionSecondaryEngineAttributeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionSecondaryEngineAttribute`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionSecondaryEngineAttribute?: (ctx: TableOptionSecondaryEngineAttributeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionRecalculation`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionRecalculation`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPersistent`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPersistent?: (ctx: TableOptionPersistentContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPersistent`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPersistent?: (ctx: TableOptionPersistentContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionSamplePage`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionSamplePage`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionTablespace`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionTablespace`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionTableType`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionTableType?: (ctx: TableOptionTableTypeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionTableType`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionTableType?: (ctx: TableOptionTableTypeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionTransactional`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionTransactional?: (ctx: TableOptionTransactionalContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionTransactional`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionTransactional?: (ctx: TableOptionTransactionalContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionUnion`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionUnion?: (ctx: TableOptionUnionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionUnion`
     * labeled alternative in `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionUnion?: (ctx: TableOptionUnionContext) => void;
    /**
     * Enter a parse tree produced by the `constantExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `constantExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `fullColumnNameExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `fullColumnNameExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `functionCallExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `functionCallExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `collateExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `collateExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `mysqlVariableExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `mysqlVariableExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `unaryExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `unaryExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `binaryExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `binaryExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `nestedExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `nestedExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `nestedRowExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `nestedRowExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `existsExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterExistsExpressionAtom?: (ctx: ExistsExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `existsExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitExistsExpressionAtom?: (ctx: ExistsExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterSubqueryExpressionAtom?: (ctx: SubqueryExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitSubqueryExpressionAtom?: (ctx: SubqueryExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `intervalExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `intervalExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `bitExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterBitExpressionAtom?: (ctx: BitExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `bitExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitBitExpressionAtom?: (ctx: BitExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `mathExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterMathExpressionAtom?: (ctx: MathExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `mathExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitMathExpressionAtom?: (ctx: MathExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `jsonExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterJsonExpressionAtom?: (ctx: JsonExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `jsonExpressionAtom`
     * labeled alternative in `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitJsonExpressionAtom?: (ctx: JsonExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `routineComment`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineComment?: (ctx: RoutineCommentContext) => void;
    /**
     * Exit a parse tree produced by the `routineComment`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineComment?: (ctx: RoutineCommentContext) => void;
    /**
     * Enter a parse tree produced by the `routineLanguage`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineLanguage?: (ctx: RoutineLanguageContext) => void;
    /**
     * Exit a parse tree produced by the `routineLanguage`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineLanguage?: (ctx: RoutineLanguageContext) => void;
    /**
     * Enter a parse tree produced by the `routineBehavior`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineBehavior?: (ctx: RoutineBehaviorContext) => void;
    /**
     * Exit a parse tree produced by the `routineBehavior`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineBehavior?: (ctx: RoutineBehaviorContext) => void;
    /**
     * Enter a parse tree produced by the `routineData`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineData?: (ctx: RoutineDataContext) => void;
    /**
     * Exit a parse tree produced by the `routineData`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineData?: (ctx: RoutineDataContext) => void;
    /**
     * Enter a parse tree produced by the `routineSecurity`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineSecurity?: (ctx: RoutineSecurityContext) => void;
    /**
     * Exit a parse tree produced by the `routineSecurity`
     * labeled alternative in `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineSecurity?: (ctx: RoutineSecurityContext) => void;
    /**
     * Enter a parse tree produced by the `createUserMysqlV56`
     * labeled alternative in `MariaDBParser.createUser`.
     * @param ctx the parse tree
     */
    enterCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => void;
    /**
     * Exit a parse tree produced by the `createUserMysqlV56`
     * labeled alternative in `MariaDBParser.createUser`.
     * @param ctx the parse tree
     */
    exitCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => void;
    /**
     * Enter a parse tree produced by the `createUserMysqlV80`
     * labeled alternative in `MariaDBParser.createUser`.
     * @param ctx the parse tree
     */
    enterCreateUserMysqlV80?: (ctx: CreateUserMysqlV80Context) => void;
    /**
     * Exit a parse tree produced by the `createUserMysqlV80`
     * labeled alternative in `MariaDBParser.createUser`.
     * @param ctx the parse tree
     */
    exitCreateUserMysqlV80?: (ctx: CreateUserMysqlV80Context) => void;
    /**
     * Enter a parse tree produced by the `currentSchemaPriviLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => void;
    /**
     * Exit a parse tree produced by the `currentSchemaPriviLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => void;
    /**
     * Enter a parse tree produced by the `globalPrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `globalPrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `definiteSchemaPrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `definiteSchemaPrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `definiteFullTablePrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `definiteFullTablePrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `definiteFullTablePrivLevel2`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => void;
    /**
     * Exit a parse tree produced by the `definiteFullTablePrivLevel2`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => void;
    /**
     * Enter a parse tree produced by the `definiteTablePrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `definiteTablePrivLevel`
     * labeled alternative in `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `showMasterLogs`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowMasterLogs?: (ctx: ShowMasterLogsContext) => void;
    /**
     * Exit a parse tree produced by the `showMasterLogs`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowMasterLogs?: (ctx: ShowMasterLogsContext) => void;
    /**
     * Enter a parse tree produced by the `showBinLogEvents`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowBinLogEvents?: (ctx: ShowBinLogEventsContext) => void;
    /**
     * Exit a parse tree produced by the `showBinLogEvents`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowBinLogEvents?: (ctx: ShowBinLogEventsContext) => void;
    /**
     * Enter a parse tree produced by the `showRelayLogEvents`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowRelayLogEvents?: (ctx: ShowRelayLogEventsContext) => void;
    /**
     * Exit a parse tree produced by the `showRelayLogEvents`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowRelayLogEvents?: (ctx: ShowRelayLogEventsContext) => void;
    /**
     * Enter a parse tree produced by the `showObjectFilter`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowObjectFilter?: (ctx: ShowObjectFilterContext) => void;
    /**
     * Exit a parse tree produced by the `showObjectFilter`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowObjectFilter?: (ctx: ShowObjectFilterContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateDb`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateDb?: (ctx: ShowCreateDbContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateDb`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateDb?: (ctx: ShowCreateDbContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateFullIdObject`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateFullIdObject`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => void;
    /**
     * Enter a parse tree produced by the `showCreatePackage`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreatePackage?: (ctx: ShowCreatePackageContext) => void;
    /**
     * Exit a parse tree produced by the `showCreatePackage`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreatePackage?: (ctx: ShowCreatePackageContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateUser`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateUser?: (ctx: ShowCreateUserContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateUser`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateUser?: (ctx: ShowCreateUserContext) => void;
    /**
     * Enter a parse tree produced by the `showEngine`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowEngine?: (ctx: ShowEngineContext) => void;
    /**
     * Exit a parse tree produced by the `showEngine`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowEngine?: (ctx: ShowEngineContext) => void;
    /**
     * Enter a parse tree produced by the `showInnoDBStatus`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowInnoDBStatus?: (ctx: ShowInnoDBStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showInnoDBStatus`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowInnoDBStatus?: (ctx: ShowInnoDBStatusContext) => void;
    /**
     * Enter a parse tree produced by the `showGlobalInfo`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => void;
    /**
     * Exit a parse tree produced by the `showGlobalInfo`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => void;
    /**
     * Enter a parse tree produced by the `showErrors`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowErrors?: (ctx: ShowErrorsContext) => void;
    /**
     * Exit a parse tree produced by the `showErrors`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowErrors?: (ctx: ShowErrorsContext) => void;
    /**
     * Enter a parse tree produced by the `showCountErrors`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCountErrors?: (ctx: ShowCountErrorsContext) => void;
    /**
     * Exit a parse tree produced by the `showCountErrors`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCountErrors?: (ctx: ShowCountErrorsContext) => void;
    /**
     * Enter a parse tree produced by the `showSchemaFilter`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => void;
    /**
     * Exit a parse tree produced by the `showSchemaFilter`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => void;
    /**
     * Enter a parse tree produced by the `showRoutine`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowRoutine?: (ctx: ShowRoutineContext) => void;
    /**
     * Exit a parse tree produced by the `showRoutine`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowRoutine?: (ctx: ShowRoutineContext) => void;
    /**
     * Enter a parse tree produced by the `showGrants`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showGrants`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `showIndexes`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowIndexes?: (ctx: ShowIndexesContext) => void;
    /**
     * Exit a parse tree produced by the `showIndexes`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowIndexes?: (ctx: ShowIndexesContext) => void;
    /**
     * Enter a parse tree produced by the `showOpenTables`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showOpenTables`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showProfile`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowProfile?: (ctx: ShowProfileContext) => void;
    /**
     * Exit a parse tree produced by the `showProfile`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowProfile?: (ctx: ShowProfileContext) => void;
    /**
     * Enter a parse tree produced by the `showSlaveStatus`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showSlaveStatus`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => void;
    /**
     * Enter a parse tree produced by the `showUserstatPlugin`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowUserstatPlugin?: (ctx: ShowUserstatPluginContext) => void;
    /**
     * Exit a parse tree produced by the `showUserstatPlugin`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowUserstatPlugin?: (ctx: ShowUserstatPluginContext) => void;
    /**
     * Enter a parse tree produced by the `showExplain`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowExplain?: (ctx: ShowExplainContext) => void;
    /**
     * Exit a parse tree produced by the `showExplain`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowExplain?: (ctx: ShowExplainContext) => void;
    /**
     * Enter a parse tree produced by the `showPackageStatus`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowPackageStatus?: (ctx: ShowPackageStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showPackageStatus`
     * labeled alternative in `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowPackageStatus?: (ctx: ShowPackageStatusContext) => void;
    /**
     * Enter a parse tree produced by the `alterSimpleDatabase`
     * labeled alternative in `MariaDBParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `alterSimpleDatabase`
     * labeled alternative in `MariaDBParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `alterUpgradeName`
     * labeled alternative in `MariaDBParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => void;
    /**
     * Exit a parse tree produced by the `alterUpgradeName`
     * labeled alternative in `MariaDBParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => void;
    /**
     * Enter a parse tree produced by the `masterStringOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterStringOption?: (ctx: MasterStringOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterStringOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterStringOption?: (ctx: MasterStringOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterDecimalOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterDecimalOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterBoolOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterBoolOption?: (ctx: MasterBoolOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterBoolOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterBoolOption?: (ctx: MasterBoolOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterRealOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterRealOption?: (ctx: MasterRealOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterRealOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterRealOption?: (ctx: MasterRealOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterUidListOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterUidListOption?: (ctx: MasterUidListOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterUidListOption`
     * labeled alternative in `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterUidListOption?: (ctx: MasterUidListOptionContext) => void;
    /**
     * Enter a parse tree produced by the `gtidsUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    enterGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `gtidsUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    exitGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterLogUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    enterMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterLogUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    exitMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `relayLogUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    enterRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `relayLogUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    exitRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `sqlGapsUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    enterSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `sqlGapsUntilOption`
     * labeled alternative in `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    exitSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `copyCreateTable`
     * labeled alternative in `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    enterCopyCreateTable?: (ctx: CopyCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `copyCreateTable`
     * labeled alternative in `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    exitCopyCreateTable?: (ctx: CopyCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `queryCreateTable`
     * labeled alternative in `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    enterQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    exitQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `columnCreateTable`
     * labeled alternative in `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    enterColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    exitColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionHash`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionHash`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionKey`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionKey`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionRange`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionRange`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionList`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionList?: (ctx: PartitionFunctionListContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionList`
     * labeled alternative in `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionList?: (ctx: PartitionFunctionListContext) => void;
    /**
     * Enter a parse tree produced by the `detailRevoke`
     * labeled alternative in `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterDetailRevoke?: (ctx: DetailRevokeContext) => void;
    /**
     * Exit a parse tree produced by the `detailRevoke`
     * labeled alternative in `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitDetailRevoke?: (ctx: DetailRevokeContext) => void;
    /**
     * Enter a parse tree produced by the `shortRevoke`
     * labeled alternative in `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterShortRevoke?: (ctx: ShortRevokeContext) => void;
    /**
     * Exit a parse tree produced by the `shortRevoke`
     * labeled alternative in `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitShortRevoke?: (ctx: ShortRevokeContext) => void;
    /**
     * Enter a parse tree produced by the `roleRevoke`
     * labeled alternative in `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterRoleRevoke?: (ctx: RoleRevokeContext) => void;
    /**
     * Exit a parse tree produced by the `roleRevoke`
     * labeled alternative in `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitRoleRevoke?: (ctx: RoleRevokeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.root`.
     * @param ctx the parse tree
     */
    enterRoot?: (ctx: RootContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.root`.
     * @param ctx the parse tree
     */
    exitRoot?: (ctx: RootContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.sqlStatements`.
     * @param ctx the parse tree
     */
    enterSqlStatements?: (ctx: SqlStatementsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.sqlStatements`.
     * @param ctx the parse tree
     */
    exitSqlStatements?: (ctx: SqlStatementsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.sqlStatement`.
     * @param ctx the parse tree
     */
    enterSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.sqlStatement`.
     * @param ctx the parse tree
     */
    exitSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.setStatementFor`.
     * @param ctx the parse tree
     */
    enterSetStatementFor?: (ctx: SetStatementForContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.setStatementFor`.
     * @param ctx the parse tree
     */
    exitSetStatementFor?: (ctx: SetStatementForContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.emptyStatement_`.
     * @param ctx the parse tree
     */
    enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.emptyStatement_`.
     * @param ctx the parse tree
     */
    exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.ddlStatement`.
     * @param ctx the parse tree
     */
    enterDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.ddlStatement`.
     * @param ctx the parse tree
     */
    exitDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dmlStatement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dmlStatement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.transactionStatement`.
     * @param ctx the parse tree
     */
    enterTransactionStatement?: (ctx: TransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.transactionStatement`.
     * @param ctx the parse tree
     */
    exitTransactionStatement?: (ctx: TransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.replicationStatement`.
     * @param ctx the parse tree
     */
    enterReplicationStatement?: (ctx: ReplicationStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.replicationStatement`.
     * @param ctx the parse tree
     */
    exitReplicationStatement?: (ctx: ReplicationStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.preparedStatement`.
     * @param ctx the parse tree
     */
    enterPreparedStatement?: (ctx: PreparedStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.preparedStatement`.
     * @param ctx the parse tree
     */
    exitPreparedStatement?: (ctx: PreparedStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.compoundStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.compoundStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.administrationStatement`.
     * @param ctx the parse tree
     */
    enterAdministrationStatement?: (ctx: AdministrationStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.administrationStatement`.
     * @param ctx the parse tree
     */
    exitAdministrationStatement?: (ctx: AdministrationStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.utilityStatement`.
     * @param ctx the parse tree
     */
    enterUtilityStatement?: (ctx: UtilityStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.utilityStatement`.
     * @param ctx the parse tree
     */
    exitUtilityStatement?: (ctx: UtilityStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createDatabase`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createDatabase`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createEvent`.
     * @param ctx the parse tree
     */
    enterCreateEvent?: (ctx: CreateEventContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createEvent`.
     * @param ctx the parse tree
     */
    exitCreateEvent?: (ctx: CreateEventContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createIndex`.
     * @param ctx the parse tree
     */
    enterCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createIndex`.
     * @param ctx the parse tree
     */
    exitCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createLogfileGroup`.
     * @param ctx the parse tree
     */
    enterCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createLogfileGroup`.
     * @param ctx the parse tree
     */
    exitCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createProcedure`.
     * @param ctx the parse tree
     */
    enterCreateProcedure?: (ctx: CreateProcedureContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createProcedure`.
     * @param ctx the parse tree
     */
    exitCreateProcedure?: (ctx: CreateProcedureContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createFunction`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createFunction`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createRole`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createRole`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createServer`.
     * @param ctx the parse tree
     */
    enterCreateServer?: (ctx: CreateServerContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createServer`.
     * @param ctx the parse tree
     */
    exitCreateServer?: (ctx: CreateServerContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createTable`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createTablespaceInnodb`.
     * @param ctx the parse tree
     */
    enterCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createTablespaceInnodb`.
     * @param ctx the parse tree
     */
    exitCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createTablespaceNdb`.
     * @param ctx the parse tree
     */
    enterCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createTablespaceNdb`.
     * @param ctx the parse tree
     */
    exitCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createTrigger`.
     * @param ctx the parse tree
     */
    enterCreateTrigger?: (ctx: CreateTriggerContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createTrigger`.
     * @param ctx the parse tree
     */
    exitCreateTrigger?: (ctx: CreateTriggerContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.commonTableExpressions`.
     * @param ctx the parse tree
     */
    enterCommonTableExpressions?: (ctx: CommonTableExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.commonTableExpressions`.
     * @param ctx the parse tree
     */
    exitCommonTableExpressions?: (ctx: CommonTableExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.cteName`.
     * @param ctx the parse tree
     */
    enterCteName?: (ctx: CteNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.cteName`.
     * @param ctx the parse tree
     */
    exitCteName?: (ctx: CteNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.cteColumnName`.
     * @param ctx the parse tree
     */
    enterCteColumnName?: (ctx: CteColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.cteColumnName`.
     * @param ctx the parse tree
     */
    exitCteColumnName?: (ctx: CteColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createView`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createView`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createSequence`.
     * @param ctx the parse tree
     */
    enterCreateSequence?: (ctx: CreateSequenceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createSequence`.
     * @param ctx the parse tree
     */
    exitCreateSequence?: (ctx: CreateSequenceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.sequenceSpec`.
     * @param ctx the parse tree
     */
    enterSequenceSpec?: (ctx: SequenceSpecContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.sequenceSpec`.
     * @param ctx the parse tree
     */
    exitSequenceSpec?: (ctx: SequenceSpecContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createDatabaseOption`.
     * @param ctx the parse tree
     */
    enterCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createDatabaseOption`.
     * @param ctx the parse tree
     */
    exitCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.charSet`.
     * @param ctx the parse tree
     */
    enterCharSet?: (ctx: CharSetContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.charSet`.
     * @param ctx the parse tree
     */
    exitCharSet?: (ctx: CharSetContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.currentUserExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUserExpression?: (ctx: CurrentUserExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.currentUserExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUserExpression?: (ctx: CurrentUserExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.ownerStatement`.
     * @param ctx the parse tree
     */
    enterOwnerStatement?: (ctx: OwnerStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.ownerStatement`.
     * @param ctx the parse tree
     */
    exitOwnerStatement?: (ctx: OwnerStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    enterScheduleExpression?: (ctx: ScheduleExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    exitScheduleExpression?: (ctx: ScheduleExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.timestampValue`.
     * @param ctx the parse tree
     */
    enterTimestampValue?: (ctx: TimestampValueContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.timestampValue`.
     * @param ctx the parse tree
     */
    exitTimestampValue?: (ctx: TimestampValueContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.intervalExpr`.
     * @param ctx the parse tree
     */
    enterIntervalExpr?: (ctx: IntervalExprContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.intervalExpr`.
     * @param ctx the parse tree
     */
    exitIntervalExpr?: (ctx: IntervalExprContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.intervalType`.
     * @param ctx the parse tree
     */
    enterIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.intervalType`.
     * @param ctx the parse tree
     */
    exitIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.enableType`.
     * @param ctx the parse tree
     */
    enterEnableType?: (ctx: EnableTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.enableType`.
     * @param ctx the parse tree
     */
    exitEnableType?: (ctx: EnableTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexType`.
     * @param ctx the parse tree
     */
    enterIndexType?: (ctx: IndexTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexType`.
     * @param ctx the parse tree
     */
    exitIndexType?: (ctx: IndexTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexOption`.
     * @param ctx the parse tree
     */
    enterIndexOption?: (ctx: IndexOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexOption`.
     * @param ctx the parse tree
     */
    exitIndexOption?: (ctx: IndexOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.procedureParameter`.
     * @param ctx the parse tree
     */
    enterProcedureParameter?: (ctx: ProcedureParameterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.procedureParameter`.
     * @param ctx the parse tree
     */
    exitProcedureParameter?: (ctx: ProcedureParameterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.functionParameter`.
     * @param ctx the parse tree
     */
    enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.functionParameter`.
     * @param ctx the parse tree
     */
    exitFunctionParameter?: (ctx: FunctionParameterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineOption?: (ctx: RoutineOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineOption?: (ctx: RoutineOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.serverOption`.
     * @param ctx the parse tree
     */
    enterServerOption?: (ctx: ServerOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.serverOption`.
     * @param ctx the parse tree
     */
    exitServerOption?: (ctx: ServerOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createDefinitions`.
     * @param ctx the parse tree
     */
    enterCreateDefinitions?: (ctx: CreateDefinitionsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createDefinitions`.
     * @param ctx the parse tree
     */
    exitCreateDefinitions?: (ctx: CreateDefinitionsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterCreateDefinition?: (ctx: CreateDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitCreateDefinition?: (ctx: CreateDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.referenceDefinition`.
     * @param ctx the parse tree
     */
    enterReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.referenceDefinition`.
     * @param ctx the parse tree
     */
    exitReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.referenceAction`.
     * @param ctx the parse tree
     */
    enterReferenceAction?: (ctx: ReferenceActionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.referenceAction`.
     * @param ctx the parse tree
     */
    exitReferenceAction?: (ctx: ReferenceActionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.referenceControlType`.
     * @param ctx the parse tree
     */
    enterReferenceControlType?: (ctx: ReferenceControlTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.referenceControlType`.
     * @param ctx the parse tree
     */
    exitReferenceControlType?: (ctx: ReferenceControlTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    enterIndexColumnDefinition?: (ctx: IndexColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    exitIndexColumnDefinition?: (ctx: IndexColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOption?: (ctx: TableOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOption?: (ctx: TableOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableType`.
     * @param ctx the parse tree
     */
    enterTableType?: (ctx: TableTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableType`.
     * @param ctx the parse tree
     */
    exitTableType?: (ctx: TableTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tablespaceStorage`.
     * @param ctx the parse tree
     */
    enterTablespaceStorage?: (ctx: TablespaceStorageContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tablespaceStorage`.
     * @param ctx the parse tree
     */
    exitTablespaceStorage?: (ctx: TablespaceStorageContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionDefinitions`.
     * @param ctx the parse tree
     */
    enterPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionDefinitions`.
     * @param ctx the parse tree
     */
    exitPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionDefinition?: (ctx: PartitionFunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionDefinition?: (ctx: PartitionFunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterSubpartitionFunctionDefinition?: (ctx: SubpartitionFunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitSubpartitionFunctionDefinition?: (ctx: SubpartitionFunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionDefinerAtom`.
     * @param ctx the parse tree
     */
    enterPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionDefinerAtom`.
     * @param ctx the parse tree
     */
    exitPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionDefinerVector`.
     * @param ctx the parse tree
     */
    enterPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionDefinerVector`.
     * @param ctx the parse tree
     */
    exitPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.subpartitionDefinition`.
     * @param ctx the parse tree
     */
    enterSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.subpartitionDefinition`.
     * @param ctx the parse tree
     */
    exitSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOption?: (ctx: PartitionOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOption?: (ctx: PartitionOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterEvent`.
     * @param ctx the parse tree
     */
    enterAlterEvent?: (ctx: AlterEventContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterEvent`.
     * @param ctx the parse tree
     */
    exitAlterEvent?: (ctx: AlterEventContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterFunction`.
     * @param ctx the parse tree
     */
    enterAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterFunction`.
     * @param ctx the parse tree
     */
    exitAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterInstance`.
     * @param ctx the parse tree
     */
    enterAlterInstance?: (ctx: AlterInstanceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterInstance`.
     * @param ctx the parse tree
     */
    exitAlterInstance?: (ctx: AlterInstanceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterLogfileGroup`.
     * @param ctx the parse tree
     */
    enterAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterLogfileGroup`.
     * @param ctx the parse tree
     */
    exitAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterProcedure`.
     * @param ctx the parse tree
     */
    enterAlterProcedure?: (ctx: AlterProcedureContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterProcedure`.
     * @param ctx the parse tree
     */
    exitAlterProcedure?: (ctx: AlterProcedureContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterServer`.
     * @param ctx the parse tree
     */
    enterAlterServer?: (ctx: AlterServerContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterServer`.
     * @param ctx the parse tree
     */
    exitAlterServer?: (ctx: AlterServerContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterTable`.
     * @param ctx the parse tree
     */
    enterAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterTable`.
     * @param ctx the parse tree
     */
    exitAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterTablespace`.
     * @param ctx the parse tree
     */
    enterAlterTablespace?: (ctx: AlterTablespaceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterTablespace`.
     * @param ctx the parse tree
     */
    exitAlterTablespace?: (ctx: AlterTablespaceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterView`.
     * @param ctx the parse tree
     */
    enterAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterView`.
     * @param ctx the parse tree
     */
    exitAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterSequence`.
     * @param ctx the parse tree
     */
    enterAlterSequence?: (ctx: AlterSequenceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterSequence`.
     * @param ctx the parse tree
     */
    exitAlterSequence?: (ctx: AlterSequenceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterSpecification?: (ctx: AlterSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterSpecification?: (ctx: AlterSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterPartitionSpecification?: (ctx: AlterPartitionSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterPartitionSpecification?: (ctx: AlterPartitionSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropDatabase`.
     * @param ctx the parse tree
     */
    enterDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropDatabase`.
     * @param ctx the parse tree
     */
    exitDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropEvent`.
     * @param ctx the parse tree
     */
    enterDropEvent?: (ctx: DropEventContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropEvent`.
     * @param ctx the parse tree
     */
    exitDropEvent?: (ctx: DropEventContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropIndex`.
     * @param ctx the parse tree
     */
    enterDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropIndex`.
     * @param ctx the parse tree
     */
    exitDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropLogfileGroup`.
     * @param ctx the parse tree
     */
    enterDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropLogfileGroup`.
     * @param ctx the parse tree
     */
    exitDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropProcedure`.
     * @param ctx the parse tree
     */
    enterDropProcedure?: (ctx: DropProcedureContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropProcedure`.
     * @param ctx the parse tree
     */
    exitDropProcedure?: (ctx: DropProcedureContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropFunction`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropFunction`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropServer`.
     * @param ctx the parse tree
     */
    enterDropServer?: (ctx: DropServerContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropServer`.
     * @param ctx the parse tree
     */
    exitDropServer?: (ctx: DropServerContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropTable`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropTable`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropTablespace`.
     * @param ctx the parse tree
     */
    enterDropTablespace?: (ctx: DropTablespaceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropTablespace`.
     * @param ctx the parse tree
     */
    exitDropTablespace?: (ctx: DropTablespaceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropTrigger`.
     * @param ctx the parse tree
     */
    enterDropTrigger?: (ctx: DropTriggerContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropTrigger`.
     * @param ctx the parse tree
     */
    exitDropTrigger?: (ctx: DropTriggerContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropView`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropView`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropRole`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropRole`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.setRole`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.setRole`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropSequence`.
     * @param ctx the parse tree
     */
    enterDropSequence?: (ctx: DropSequenceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropSequence`.
     * @param ctx the parse tree
     */
    exitDropSequence?: (ctx: DropSequenceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.renameTable`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.renameTable`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.renameTableClause`.
     * @param ctx the parse tree
     */
    enterRenameTableClause?: (ctx: RenameTableClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.renameTableClause`.
     * @param ctx the parse tree
     */
    exitRenameTableClause?: (ctx: RenameTableClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.truncateTable`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.truncateTable`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.callStatement`.
     * @param ctx the parse tree
     */
    enterCallStatement?: (ctx: CallStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.callStatement`.
     * @param ctx the parse tree
     */
    exitCallStatement?: (ctx: CallStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.doStatement`.
     * @param ctx the parse tree
     */
    enterDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.doStatement`.
     * @param ctx the parse tree
     */
    exitDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.handlerStatement`.
     * @param ctx the parse tree
     */
    enterHandlerStatement?: (ctx: HandlerStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.handlerStatement`.
     * @param ctx the parse tree
     */
    exitHandlerStatement?: (ctx: HandlerStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.loadDataStatement`.
     * @param ctx the parse tree
     */
    enterLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.loadDataStatement`.
     * @param ctx the parse tree
     */
    exitLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.loadXmlStatement`.
     * @param ctx the parse tree
     */
    enterLoadXmlStatement?: (ctx: LoadXmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.loadXmlStatement`.
     * @param ctx the parse tree
     */
    exitLoadXmlStatement?: (ctx: LoadXmlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.replaceStatement`.
     * @param ctx the parse tree
     */
    enterReplaceStatement?: (ctx: ReplaceStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.replaceStatement`.
     * @param ctx the parse tree
     */
    exitReplaceStatement?: (ctx: ReplaceStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.updateStatement`.
     * @param ctx the parse tree
     */
    enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.updateStatement`.
     * @param ctx the parse tree
     */
    exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.valuesStatement`.
     * @param ctx the parse tree
     */
    enterValuesStatement?: (ctx: ValuesStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.valuesStatement`.
     * @param ctx the parse tree
     */
    exitValuesStatement?: (ctx: ValuesStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.insertStatementValue`.
     * @param ctx the parse tree
     */
    enterInsertStatementValue?: (ctx: InsertStatementValueContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.insertStatementValue`.
     * @param ctx the parse tree
     */
    exitInsertStatementValue?: (ctx: InsertStatementValueContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.updatedElement`.
     * @param ctx the parse tree
     */
    enterUpdatedElement?: (ctx: UpdatedElementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.updatedElement`.
     * @param ctx the parse tree
     */
    exitUpdatedElement?: (ctx: UpdatedElementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.assignmentField`.
     * @param ctx the parse tree
     */
    enterAssignmentField?: (ctx: AssignmentFieldContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.assignmentField`.
     * @param ctx the parse tree
     */
    exitAssignmentField?: (ctx: AssignmentFieldContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lockClause`.
     * @param ctx the parse tree
     */
    enterLockClause?: (ctx: LockClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lockClause`.
     * @param ctx the parse tree
     */
    exitLockClause?: (ctx: LockClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.singleDeleteStatement`.
     * @param ctx the parse tree
     */
    enterSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.singleDeleteStatement`.
     * @param ctx the parse tree
     */
    exitSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.multipleDeleteStatement`.
     * @param ctx the parse tree
     */
    enterMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.multipleDeleteStatement`.
     * @param ctx the parse tree
     */
    exitMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.handlerOpenStatement`.
     * @param ctx the parse tree
     */
    enterHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.handlerOpenStatement`.
     * @param ctx the parse tree
     */
    exitHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.handlerReadIndexStatement`.
     * @param ctx the parse tree
     */
    enterHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.handlerReadIndexStatement`.
     * @param ctx the parse tree
     */
    exitHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.handlerReadStatement`.
     * @param ctx the parse tree
     */
    enterHandlerReadStatement?: (ctx: HandlerReadStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.handlerReadStatement`.
     * @param ctx the parse tree
     */
    exitHandlerReadStatement?: (ctx: HandlerReadStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.handlerCloseStatement`.
     * @param ctx the parse tree
     */
    enterHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.handlerCloseStatement`.
     * @param ctx the parse tree
     */
    exitHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.singleUpdateStatement`.
     * @param ctx the parse tree
     */
    enterSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.singleUpdateStatement`.
     * @param ctx the parse tree
     */
    exitSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.multipleUpdateStatement`.
     * @param ctx the parse tree
     */
    enterMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.multipleUpdateStatement`.
     * @param ctx the parse tree
     */
    exitMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.orderByExpression`.
     * @param ctx the parse tree
     */
    enterOrderByExpression?: (ctx: OrderByExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.orderByExpression`.
     * @param ctx the parse tree
     */
    exitOrderByExpression?: (ctx: OrderByExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableSources`.
     * @param ctx the parse tree
     */
    enterTableSources?: (ctx: TableSourcesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableSources`.
     * @param ctx the parse tree
     */
    exitTableSources?: (ctx: TableSourcesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSource?: (ctx: TableSourceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSource?: (ctx: TableSourceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterTableSourceItem?: (ctx: TableSourceItemContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitTableSourceItem?: (ctx: TableSourceItemContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexHint`.
     * @param ctx the parse tree
     */
    enterIndexHint?: (ctx: IndexHintContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexHint`.
     * @param ctx the parse tree
     */
    exitIndexHint?: (ctx: IndexHintContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexHintType`.
     * @param ctx the parse tree
     */
    enterIndexHintType?: (ctx: IndexHintTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexHintType`.
     * @param ctx the parse tree
     */
    exitIndexHintType?: (ctx: IndexHintTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    enterJoinPart?: (ctx: JoinPartContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.joinPart`.
     * @param ctx the parse tree
     */
    exitJoinPart?: (ctx: JoinPartContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.queryExpression`.
     * @param ctx the parse tree
     */
    enterQueryExpression?: (ctx: QueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.queryExpression`.
     * @param ctx the parse tree
     */
    exitQueryExpression?: (ctx: QueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.queryExpressionNointo`.
     * @param ctx the parse tree
     */
    enterQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.queryExpressionNointo`.
     * @param ctx the parse tree
     */
    exitQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.querySpecificationNointo`.
     * @param ctx the parse tree
     */
    enterQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.querySpecificationNointo`.
     * @param ctx the parse tree
     */
    exitQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.unionParenthesis`.
     * @param ctx the parse tree
     */
    enterUnionParenthesis?: (ctx: UnionParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.unionParenthesis`.
     * @param ctx the parse tree
     */
    exitUnionParenthesis?: (ctx: UnionParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.unionStatement`.
     * @param ctx the parse tree
     */
    enterUnionStatement?: (ctx: UnionStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.unionStatement`.
     * @param ctx the parse tree
     */
    exitUnionStatement?: (ctx: UnionStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lateralStatement`.
     * @param ctx the parse tree
     */
    enterLateralStatement?: (ctx: LateralStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lateralStatement`.
     * @param ctx the parse tree
     */
    exitLateralStatement?: (ctx: LateralStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.jsonTable`.
     * @param ctx the parse tree
     */
    enterJsonTable?: (ctx: JsonTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.jsonTable`.
     * @param ctx the parse tree
     */
    exitJsonTable?: (ctx: JsonTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.jsonColumnList`.
     * @param ctx the parse tree
     */
    enterJsonColumnList?: (ctx: JsonColumnListContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.jsonColumnList`.
     * @param ctx the parse tree
     */
    exitJsonColumnList?: (ctx: JsonColumnListContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.jsonColumn`.
     * @param ctx the parse tree
     */
    enterJsonColumn?: (ctx: JsonColumnContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.jsonColumn`.
     * @param ctx the parse tree
     */
    exitJsonColumn?: (ctx: JsonColumnContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.jsonOnEmpty`.
     * @param ctx the parse tree
     */
    enterJsonOnEmpty?: (ctx: JsonOnEmptyContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.jsonOnEmpty`.
     * @param ctx the parse tree
     */
    exitJsonOnEmpty?: (ctx: JsonOnEmptyContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.jsonOnError`.
     * @param ctx the parse tree
     */
    enterJsonOnError?: (ctx: JsonOnErrorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.jsonOnError`.
     * @param ctx the parse tree
     */
    exitJsonOnError?: (ctx: JsonOnErrorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectSpec`.
     * @param ctx the parse tree
     */
    enterSelectSpec?: (ctx: SelectSpecContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectSpec`.
     * @param ctx the parse tree
     */
    exitSelectSpec?: (ctx: SelectSpecContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectElements`.
     * @param ctx the parse tree
     */
    enterSelectElements?: (ctx: SelectElementsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectElements`.
     * @param ctx the parse tree
     */
    exitSelectElements?: (ctx: SelectElementsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectElement?: (ctx: SelectElementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectElement?: (ctx: SelectElementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoExpression?: (ctx: SelectIntoExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoExpression?: (ctx: SelectIntoExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectFieldsInto`.
     * @param ctx the parse tree
     */
    enterSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectFieldsInto`.
     * @param ctx the parse tree
     */
    exitSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.selectLinesInto`.
     * @param ctx the parse tree
     */
    enterSelectLinesInto?: (ctx: SelectLinesIntoContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.selectLinesInto`.
     * @param ctx the parse tree
     */
    exitSelectLinesInto?: (ctx: SelectLinesIntoContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.groupByItem`.
     * @param ctx the parse tree
     */
    enterGroupByItem?: (ctx: GroupByItemContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.groupByItem`.
     * @param ctx the parse tree
     */
    exitGroupByItem?: (ctx: GroupByItemContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.limitClauseAtom`.
     * @param ctx the parse tree
     */
    enterLimitClauseAtom?: (ctx: LimitClauseAtomContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.limitClauseAtom`.
     * @param ctx the parse tree
     */
    exitLimitClauseAtom?: (ctx: LimitClauseAtomContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.startTransaction`.
     * @param ctx the parse tree
     */
    enterStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.startTransaction`.
     * @param ctx the parse tree
     */
    exitStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.beginWork`.
     * @param ctx the parse tree
     */
    enterBeginWork?: (ctx: BeginWorkContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.beginWork`.
     * @param ctx the parse tree
     */
    exitBeginWork?: (ctx: BeginWorkContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.commitWork`.
     * @param ctx the parse tree
     */
    enterCommitWork?: (ctx: CommitWorkContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.commitWork`.
     * @param ctx the parse tree
     */
    exitCommitWork?: (ctx: CommitWorkContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.rollbackWork`.
     * @param ctx the parse tree
     */
    enterRollbackWork?: (ctx: RollbackWorkContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.rollbackWork`.
     * @param ctx the parse tree
     */
    exitRollbackWork?: (ctx: RollbackWorkContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.savepointStatement`.
     * @param ctx the parse tree
     */
    enterSavepointStatement?: (ctx: SavepointStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.savepointStatement`.
     * @param ctx the parse tree
     */
    exitSavepointStatement?: (ctx: SavepointStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    exitRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.releaseStatement`.
     * @param ctx the parse tree
     */
    enterReleaseStatement?: (ctx: ReleaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.releaseStatement`.
     * @param ctx the parse tree
     */
    exitReleaseStatement?: (ctx: ReleaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lockTables`.
     * @param ctx the parse tree
     */
    enterLockTables?: (ctx: LockTablesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lockTables`.
     * @param ctx the parse tree
     */
    exitLockTables?: (ctx: LockTablesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.unlockTables`.
     * @param ctx the parse tree
     */
    enterUnlockTables?: (ctx: UnlockTablesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.unlockTables`.
     * @param ctx the parse tree
     */
    exitUnlockTables?: (ctx: UnlockTablesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.setAutocommitStatement`.
     * @param ctx the parse tree
     */
    enterSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.setAutocommitStatement`.
     * @param ctx the parse tree
     */
    exitSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.setTransactionStatement`.
     * @param ctx the parse tree
     */
    enterSetTransactionStatement?: (ctx: SetTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.setTransactionStatement`.
     * @param ctx the parse tree
     */
    exitSetTransactionStatement?: (ctx: SetTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lockTableElement`.
     * @param ctx the parse tree
     */
    enterLockTableElement?: (ctx: LockTableElementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lockTableElement`.
     * @param ctx the parse tree
     */
    exitLockTableElement?: (ctx: LockTableElementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lockAction`.
     * @param ctx the parse tree
     */
    enterLockAction?: (ctx: LockActionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lockAction`.
     * @param ctx the parse tree
     */
    exitLockAction?: (ctx: LockActionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.transactionOption`.
     * @param ctx the parse tree
     */
    enterTransactionOption?: (ctx: TransactionOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.transactionOption`.
     * @param ctx the parse tree
     */
    exitTransactionOption?: (ctx: TransactionOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.transactionLevel`.
     * @param ctx the parse tree
     */
    enterTransactionLevel?: (ctx: TransactionLevelContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.transactionLevel`.
     * @param ctx the parse tree
     */
    exitTransactionLevel?: (ctx: TransactionLevelContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.changeMaster`.
     * @param ctx the parse tree
     */
    enterChangeMaster?: (ctx: ChangeMasterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.changeMaster`.
     * @param ctx the parse tree
     */
    exitChangeMaster?: (ctx: ChangeMasterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.changeReplicationFilter`.
     * @param ctx the parse tree
     */
    enterChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.changeReplicationFilter`.
     * @param ctx the parse tree
     */
    exitChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.purgeBinaryLogs`.
     * @param ctx the parse tree
     */
    enterPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.purgeBinaryLogs`.
     * @param ctx the parse tree
     */
    exitPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.resetMaster`.
     * @param ctx the parse tree
     */
    enterResetMaster?: (ctx: ResetMasterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.resetMaster`.
     * @param ctx the parse tree
     */
    exitResetMaster?: (ctx: ResetMasterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.resetSlave`.
     * @param ctx the parse tree
     */
    enterResetSlave?: (ctx: ResetSlaveContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.resetSlave`.
     * @param ctx the parse tree
     */
    exitResetSlave?: (ctx: ResetSlaveContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.startSlave`.
     * @param ctx the parse tree
     */
    enterStartSlave?: (ctx: StartSlaveContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.startSlave`.
     * @param ctx the parse tree
     */
    exitStartSlave?: (ctx: StartSlaveContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.stopSlave`.
     * @param ctx the parse tree
     */
    enterStopSlave?: (ctx: StopSlaveContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.stopSlave`.
     * @param ctx the parse tree
     */
    exitStopSlave?: (ctx: StopSlaveContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.startGroupReplication`.
     * @param ctx the parse tree
     */
    enterStartGroupReplication?: (ctx: StartGroupReplicationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.startGroupReplication`.
     * @param ctx the parse tree
     */
    exitStartGroupReplication?: (ctx: StartGroupReplicationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.stopGroupReplication`.
     * @param ctx the parse tree
     */
    enterStopGroupReplication?: (ctx: StopGroupReplicationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.stopGroupReplication`.
     * @param ctx the parse tree
     */
    exitStopGroupReplication?: (ctx: StopGroupReplicationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterOption?: (ctx: MasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterOption?: (ctx: MasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.stringMasterOption`.
     * @param ctx the parse tree
     */
    enterStringMasterOption?: (ctx: StringMasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.stringMasterOption`.
     * @param ctx the parse tree
     */
    exitStringMasterOption?: (ctx: StringMasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.decimalMasterOption`.
     * @param ctx the parse tree
     */
    enterDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.decimalMasterOption`.
     * @param ctx the parse tree
     */
    exitDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.boolMasterOption`.
     * @param ctx the parse tree
     */
    enterBoolMasterOption?: (ctx: BoolMasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.boolMasterOption`.
     * @param ctx the parse tree
     */
    exitBoolMasterOption?: (ctx: BoolMasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.channelOption`.
     * @param ctx the parse tree
     */
    enterChannelOption?: (ctx: ChannelOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.channelOption`.
     * @param ctx the parse tree
     */
    exitChannelOption?: (ctx: ChannelOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterReplicationFilter?: (ctx: ReplicationFilterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitReplicationFilter?: (ctx: ReplicationFilterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tablePair`.
     * @param ctx the parse tree
     */
    enterTablePair?: (ctx: TablePairContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tablePair`.
     * @param ctx the parse tree
     */
    exitTablePair?: (ctx: TablePairContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.threadType`.
     * @param ctx the parse tree
     */
    enterThreadType?: (ctx: ThreadTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.threadType`.
     * @param ctx the parse tree
     */
    exitThreadType?: (ctx: ThreadTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    enterUntilOption?: (ctx: UntilOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.untilOption`.
     * @param ctx the parse tree
     */
    exitUntilOption?: (ctx: UntilOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterConnectionOption?: (ctx: ConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitConnectionOption?: (ctx: ConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.gtuidSet`.
     * @param ctx the parse tree
     */
    enterGtuidSet?: (ctx: GtuidSetContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.gtuidSet`.
     * @param ctx the parse tree
     */
    exitGtuidSet?: (ctx: GtuidSetContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xaStartTransaction`.
     * @param ctx the parse tree
     */
    enterXaStartTransaction?: (ctx: XaStartTransactionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xaStartTransaction`.
     * @param ctx the parse tree
     */
    exitXaStartTransaction?: (ctx: XaStartTransactionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xaEndTransaction`.
     * @param ctx the parse tree
     */
    enterXaEndTransaction?: (ctx: XaEndTransactionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xaEndTransaction`.
     * @param ctx the parse tree
     */
    exitXaEndTransaction?: (ctx: XaEndTransactionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xaPrepareStatement`.
     * @param ctx the parse tree
     */
    enterXaPrepareStatement?: (ctx: XaPrepareStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xaPrepareStatement`.
     * @param ctx the parse tree
     */
    exitXaPrepareStatement?: (ctx: XaPrepareStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xaCommitWork`.
     * @param ctx the parse tree
     */
    enterXaCommitWork?: (ctx: XaCommitWorkContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xaCommitWork`.
     * @param ctx the parse tree
     */
    exitXaCommitWork?: (ctx: XaCommitWorkContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xaRollbackWork`.
     * @param ctx the parse tree
     */
    enterXaRollbackWork?: (ctx: XaRollbackWorkContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xaRollbackWork`.
     * @param ctx the parse tree
     */
    exitXaRollbackWork?: (ctx: XaRollbackWorkContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xaRecoverWork`.
     * @param ctx the parse tree
     */
    enterXaRecoverWork?: (ctx: XaRecoverWorkContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xaRecoverWork`.
     * @param ctx the parse tree
     */
    exitXaRecoverWork?: (ctx: XaRecoverWorkContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.prepareStatement`.
     * @param ctx the parse tree
     */
    enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.prepareStatement`.
     * @param ctx the parse tree
     */
    exitPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.executeStatement`.
     * @param ctx the parse tree
     */
    enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.executeStatement`.
     * @param ctx the parse tree
     */
    exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.deallocatePrepare`.
     * @param ctx the parse tree
     */
    enterDeallocatePrepare?: (ctx: DeallocatePrepareContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.deallocatePrepare`.
     * @param ctx the parse tree
     */
    exitDeallocatePrepare?: (ctx: DeallocatePrepareContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.routineBody`.
     * @param ctx the parse tree
     */
    enterRoutineBody?: (ctx: RoutineBodyContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.routineBody`.
     * @param ctx the parse tree
     */
    exitRoutineBody?: (ctx: RoutineBodyContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.blockStatement`.
     * @param ctx the parse tree
     */
    enterBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.blockStatement`.
     * @param ctx the parse tree
     */
    exitBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.caseStatement`.
     * @param ctx the parse tree
     */
    enterCaseStatement?: (ctx: CaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.caseStatement`.
     * @param ctx the parse tree
     */
    exitCaseStatement?: (ctx: CaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.iterateStatement`.
     * @param ctx the parse tree
     */
    enterIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.iterateStatement`.
     * @param ctx the parse tree
     */
    exitIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.leaveStatement`.
     * @param ctx the parse tree
     */
    enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.leaveStatement`.
     * @param ctx the parse tree
     */
    exitLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.loopStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.loopStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.repeatStatement`.
     * @param ctx the parse tree
     */
    enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.repeatStatement`.
     * @param ctx the parse tree
     */
    exitRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.whileStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.whileStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterCursorStatement?: (ctx: CursorStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitCursorStatement?: (ctx: CursorStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.declareVariable`.
     * @param ctx the parse tree
     */
    enterDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.declareVariable`.
     * @param ctx the parse tree
     */
    exitDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.declareCondition`.
     * @param ctx the parse tree
     */
    enterDeclareCondition?: (ctx: DeclareConditionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.declareCondition`.
     * @param ctx the parse tree
     */
    exitDeclareCondition?: (ctx: DeclareConditionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.declareCursor`.
     * @param ctx the parse tree
     */
    enterDeclareCursor?: (ctx: DeclareCursorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.declareCursor`.
     * @param ctx the parse tree
     */
    exitDeclareCursor?: (ctx: DeclareCursorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.declareHandler`.
     * @param ctx the parse tree
     */
    enterDeclareHandler?: (ctx: DeclareHandlerContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.declareHandler`.
     * @param ctx the parse tree
     */
    exitDeclareHandler?: (ctx: DeclareHandlerContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionValue?: (ctx: HandlerConditionValueContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionValue?: (ctx: HandlerConditionValueContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.procedureSqlStatement`.
     * @param ctx the parse tree
     */
    enterProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.procedureSqlStatement`.
     * @param ctx the parse tree
     */
    exitProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.caseAlternative`.
     * @param ctx the parse tree
     */
    enterCaseAlternative?: (ctx: CaseAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.caseAlternative`.
     * @param ctx the parse tree
     */
    exitCaseAlternative?: (ctx: CaseAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.elifAlternative`.
     * @param ctx the parse tree
     */
    enterElifAlternative?: (ctx: ElifAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.elifAlternative`.
     * @param ctx the parse tree
     */
    exitElifAlternative?: (ctx: ElifAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.alterUser`.
     * @param ctx the parse tree
     */
    enterAlterUser?: (ctx: AlterUserContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.alterUser`.
     * @param ctx the parse tree
     */
    exitAlterUser?: (ctx: AlterUserContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createUser`.
     * @param ctx the parse tree
     */
    enterCreateUser?: (ctx: CreateUserContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createUser`.
     * @param ctx the parse tree
     */
    exitCreateUser?: (ctx: CreateUserContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dropUser`.
     * @param ctx the parse tree
     */
    enterDropUser?: (ctx: DropUserContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dropUser`.
     * @param ctx the parse tree
     */
    exitDropUser?: (ctx: DropUserContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.grantStatement`.
     * @param ctx the parse tree
     */
    enterGrantStatement?: (ctx: GrantStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.grantStatement`.
     * @param ctx the parse tree
     */
    exitGrantStatement?: (ctx: GrantStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.roleOption`.
     * @param ctx the parse tree
     */
    enterRoleOption?: (ctx: RoleOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.roleOption`.
     * @param ctx the parse tree
     */
    exitRoleOption?: (ctx: RoleOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.grantProxy`.
     * @param ctx the parse tree
     */
    enterGrantProxy?: (ctx: GrantProxyContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.grantProxy`.
     * @param ctx the parse tree
     */
    exitGrantProxy?: (ctx: GrantProxyContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.renameUser`.
     * @param ctx the parse tree
     */
    enterRenameUser?: (ctx: RenameUserContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.renameUser`.
     * @param ctx the parse tree
     */
    exitRenameUser?: (ctx: RenameUserContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterRevokeStatement?: (ctx: RevokeStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitRevokeStatement?: (ctx: RevokeStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.revokeProxy`.
     * @param ctx the parse tree
     */
    enterRevokeProxy?: (ctx: RevokeProxyContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.revokeProxy`.
     * @param ctx the parse tree
     */
    exitRevokeProxy?: (ctx: RevokeProxyContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.setPasswordStatement`.
     * @param ctx the parse tree
     */
    enterSetPasswordStatement?: (ctx: SetPasswordStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.setPasswordStatement`.
     * @param ctx the parse tree
     */
    exitSetPasswordStatement?: (ctx: SetPasswordStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userSpecification`.
     * @param ctx the parse tree
     */
    enterUserSpecification?: (ctx: UserSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userSpecification`.
     * @param ctx the parse tree
     */
    exitUserSpecification?: (ctx: UserSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterUserAuthOption?: (ctx: UserAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitUserAuthOption?: (ctx: UserAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.authenticationRule`.
     * @param ctx the parse tree
     */
    enterAuthenticationRule?: (ctx: AuthenticationRuleContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.authenticationRule`.
     * @param ctx the parse tree
     */
    exitAuthenticationRule?: (ctx: AuthenticationRuleContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tlsOption`.
     * @param ctx the parse tree
     */
    enterTlsOption?: (ctx: TlsOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tlsOption`.
     * @param ctx the parse tree
     */
    exitTlsOption?: (ctx: TlsOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userResourceOption`.
     * @param ctx the parse tree
     */
    enterUserResourceOption?: (ctx: UserResourceOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userResourceOption`.
     * @param ctx the parse tree
     */
    exitUserResourceOption?: (ctx: UserResourceOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userPasswordOption`.
     * @param ctx the parse tree
     */
    enterUserPasswordOption?: (ctx: UserPasswordOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userPasswordOption`.
     * @param ctx the parse tree
     */
    exitUserPasswordOption?: (ctx: UserPasswordOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userLockOption`.
     * @param ctx the parse tree
     */
    enterUserLockOption?: (ctx: UserLockOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userLockOption`.
     * @param ctx the parse tree
     */
    exitUserLockOption?: (ctx: UserLockOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.privelegeClause`.
     * @param ctx the parse tree
     */
    enterPrivelegeClause?: (ctx: PrivelegeClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.privelegeClause`.
     * @param ctx the parse tree
     */
    exitPrivelegeClause?: (ctx: PrivelegeClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterPrivilegeLevel?: (ctx: PrivilegeLevelContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitPrivilegeLevel?: (ctx: PrivilegeLevelContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.renameUserClause`.
     * @param ctx the parse tree
     */
    enterRenameUserClause?: (ctx: RenameUserClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.renameUserClause`.
     * @param ctx the parse tree
     */
    exitRenameUserClause?: (ctx: RenameUserClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.analyzeTable`.
     * @param ctx the parse tree
     */
    enterAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.analyzeTable`.
     * @param ctx the parse tree
     */
    exitAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.checkTable`.
     * @param ctx the parse tree
     */
    enterCheckTable?: (ctx: CheckTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.checkTable`.
     * @param ctx the parse tree
     */
    exitCheckTable?: (ctx: CheckTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.checksumTable`.
     * @param ctx the parse tree
     */
    enterChecksumTable?: (ctx: ChecksumTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.checksumTable`.
     * @param ctx the parse tree
     */
    exitChecksumTable?: (ctx: ChecksumTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.optimizeTable`.
     * @param ctx the parse tree
     */
    enterOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.optimizeTable`.
     * @param ctx the parse tree
     */
    exitOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.repairTable`.
     * @param ctx the parse tree
     */
    enterRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.repairTable`.
     * @param ctx the parse tree
     */
    exitRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.checkTableOption`.
     * @param ctx the parse tree
     */
    enterCheckTableOption?: (ctx: CheckTableOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.checkTableOption`.
     * @param ctx the parse tree
     */
    exitCheckTableOption?: (ctx: CheckTableOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.createUdfunction`.
     * @param ctx the parse tree
     */
    enterCreateUdfunction?: (ctx: CreateUdfunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.createUdfunction`.
     * @param ctx the parse tree
     */
    exitCreateUdfunction?: (ctx: CreateUdfunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.installPlugin`.
     * @param ctx the parse tree
     */
    enterInstallPlugin?: (ctx: InstallPluginContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.installPlugin`.
     * @param ctx the parse tree
     */
    exitInstallPlugin?: (ctx: InstallPluginContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.uninstallPlugin`.
     * @param ctx the parse tree
     */
    enterUninstallPlugin?: (ctx: UninstallPluginContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.uninstallPlugin`.
     * @param ctx the parse tree
     */
    exitUninstallPlugin?: (ctx: UninstallPluginContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.explainStatement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.explainStatement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.variableClause`.
     * @param ctx the parse tree
     */
    enterVariableClause?: (ctx: VariableClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.variableClause`.
     * @param ctx the parse tree
     */
    exitVariableClause?: (ctx: VariableClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.showCommonEntity`.
     * @param ctx the parse tree
     */
    enterShowCommonEntity?: (ctx: ShowCommonEntityContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.showCommonEntity`.
     * @param ctx the parse tree
     */
    exitShowCommonEntity?: (ctx: ShowCommonEntityContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.showFilter`.
     * @param ctx the parse tree
     */
    enterShowFilter?: (ctx: ShowFilterContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.showFilter`.
     * @param ctx the parse tree
     */
    exitShowFilter?: (ctx: ShowFilterContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.showGlobalInfoClause`.
     * @param ctx the parse tree
     */
    enterShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.showGlobalInfoClause`.
     * @param ctx the parse tree
     */
    exitShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.showSchemaEntity`.
     * @param ctx the parse tree
     */
    enterShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.showSchemaEntity`.
     * @param ctx the parse tree
     */
    exitShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.showProfileType`.
     * @param ctx the parse tree
     */
    enterShowProfileType?: (ctx: ShowProfileTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.showProfileType`.
     * @param ctx the parse tree
     */
    exitShowProfileType?: (ctx: ShowProfileTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.binlogStatement`.
     * @param ctx the parse tree
     */
    enterBinlogStatement?: (ctx: BinlogStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.binlogStatement`.
     * @param ctx the parse tree
     */
    exitBinlogStatement?: (ctx: BinlogStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.cacheIndexStatement`.
     * @param ctx the parse tree
     */
    enterCacheIndexStatement?: (ctx: CacheIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.cacheIndexStatement`.
     * @param ctx the parse tree
     */
    exitCacheIndexStatement?: (ctx: CacheIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.flushStatement`.
     * @param ctx the parse tree
     */
    enterFlushStatement?: (ctx: FlushStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.flushStatement`.
     * @param ctx the parse tree
     */
    exitFlushStatement?: (ctx: FlushStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.killStatement`.
     * @param ctx the parse tree
     */
    enterKillStatement?: (ctx: KillStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.killStatement`.
     * @param ctx the parse tree
     */
    exitKillStatement?: (ctx: KillStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.loadIndexIntoCache`.
     * @param ctx the parse tree
     */
    enterLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.loadIndexIntoCache`.
     * @param ctx the parse tree
     */
    exitLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.resetStatement`.
     * @param ctx the parse tree
     */
    enterResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.resetStatement`.
     * @param ctx the parse tree
     */
    exitResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.shutdownStatement`.
     * @param ctx the parse tree
     */
    enterShutdownStatement?: (ctx: ShutdownStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.shutdownStatement`.
     * @param ctx the parse tree
     */
    exitShutdownStatement?: (ctx: ShutdownStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableIndexes`.
     * @param ctx the parse tree
     */
    enterTableIndexes?: (ctx: TableIndexesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableIndexes`.
     * @param ctx the parse tree
     */
    exitTableIndexes?: (ctx: TableIndexesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    enterFlushOption?: (ctx: FlushOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.flushOption`.
     * @param ctx the parse tree
     */
    exitFlushOption?: (ctx: FlushOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.flushTableOption`.
     * @param ctx the parse tree
     */
    enterFlushTableOption?: (ctx: FlushTableOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.flushTableOption`.
     * @param ctx the parse tree
     */
    exitFlushTableOption?: (ctx: FlushTableOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.loadedTableIndexes`.
     * @param ctx the parse tree
     */
    enterLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.loadedTableIndexes`.
     * @param ctx the parse tree
     */
    exitLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.simpleDescribeStatement`.
     * @param ctx the parse tree
     */
    enterSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.simpleDescribeStatement`.
     * @param ctx the parse tree
     */
    exitSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.fullDescribeStatement`.
     * @param ctx the parse tree
     */
    enterFullDescribeStatement?: (ctx: FullDescribeStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.fullDescribeStatement`.
     * @param ctx the parse tree
     */
    exitFullDescribeStatement?: (ctx: FullDescribeStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.formatJsonStatement`.
     * @param ctx the parse tree
     */
    enterFormatJsonStatement?: (ctx: FormatJsonStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.formatJsonStatement`.
     * @param ctx the parse tree
     */
    exitFormatJsonStatement?: (ctx: FormatJsonStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.helpStatement`.
     * @param ctx the parse tree
     */
    enterHelpStatement?: (ctx: HelpStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.helpStatement`.
     * @param ctx the parse tree
     */
    exitHelpStatement?: (ctx: HelpStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.useStatement`.
     * @param ctx the parse tree
     */
    enterUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.useStatement`.
     * @param ctx the parse tree
     */
    exitUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.signalStatement`.
     * @param ctx the parse tree
     */
    enterSignalStatement?: (ctx: SignalStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.signalStatement`.
     * @param ctx the parse tree
     */
    exitSignalStatement?: (ctx: SignalStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.resignalStatement`.
     * @param ctx the parse tree
     */
    enterResignalStatement?: (ctx: ResignalStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.resignalStatement`.
     * @param ctx the parse tree
     */
    exitResignalStatement?: (ctx: ResignalStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.signalConditionInformation`.
     * @param ctx the parse tree
     */
    enterSignalConditionInformation?: (ctx: SignalConditionInformationContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.signalConditionInformation`.
     * @param ctx the parse tree
     */
    exitSignalConditionInformation?: (ctx: SignalConditionInformationContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.diagnosticsStatement`.
     * @param ctx the parse tree
     */
    enterDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.diagnosticsStatement`.
     * @param ctx the parse tree
     */
    exitDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.diagnosticsConditionInformationName`.
     * @param ctx the parse tree
     */
    enterDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.diagnosticsConditionInformationName`.
     * @param ctx the parse tree
     */
    exitDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    enterDescribeObjectClause?: (ctx: DescribeObjectClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    exitDescribeObjectClause?: (ctx: DescribeObjectClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.fullId`.
     * @param ctx the parse tree
     */
    enterFullId?: (ctx: FullIdContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.fullId`.
     * @param ctx the parse tree
     */
    exitFullId?: (ctx: FullIdContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.roleName`.
     * @param ctx the parse tree
     */
    enterRoleName?: (ctx: RoleNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.roleName`.
     * @param ctx the parse tree
     */
    exitRoleName?: (ctx: RoleNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.fullColumnName`.
     * @param ctx the parse tree
     */
    enterFullColumnName?: (ctx: FullColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.fullColumnName`.
     * @param ctx the parse tree
     */
    exitFullColumnName?: (ctx: FullColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexColumnName`.
     * @param ctx the parse tree
     */
    enterIndexColumnName?: (ctx: IndexColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexColumnName`.
     * @param ctx the parse tree
     */
    exitIndexColumnName?: (ctx: IndexColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userName`.
     * @param ctx the parse tree
     */
    enterUserName?: (ctx: UserNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userName`.
     * @param ctx the parse tree
     */
    exitUserName?: (ctx: UserNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.mysqlVariable`.
     * @param ctx the parse tree
     */
    enterMysqlVariable?: (ctx: MysqlVariableContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.mysqlVariable`.
     * @param ctx the parse tree
     */
    exitMysqlVariable?: (ctx: MysqlVariableContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.charsetName`.
     * @param ctx the parse tree
     */
    enterCharsetName?: (ctx: CharsetNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.charsetName`.
     * @param ctx the parse tree
     */
    exitCharsetName?: (ctx: CharsetNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.collationName`.
     * @param ctx the parse tree
     */
    enterCollationName?: (ctx: CollationNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.collationName`.
     * @param ctx the parse tree
     */
    exitCollationName?: (ctx: CollationNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.engineName`.
     * @param ctx the parse tree
     */
    enterEngineName?: (ctx: EngineNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.engineName`.
     * @param ctx the parse tree
     */
    exitEngineName?: (ctx: EngineNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.engineNameBase`.
     * @param ctx the parse tree
     */
    enterEngineNameBase?: (ctx: EngineNameBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.engineNameBase`.
     * @param ctx the parse tree
     */
    exitEngineNameBase?: (ctx: EngineNameBaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.encryptedLiteral`.
     * @param ctx the parse tree
     */
    enterEncryptedLiteral?: (ctx: EncryptedLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.encryptedLiteral`.
     * @param ctx the parse tree
     */
    exitEncryptedLiteral?: (ctx: EncryptedLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.uuidSet`.
     * @param ctx the parse tree
     */
    enterUuidSet?: (ctx: UuidSetContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.uuidSet`.
     * @param ctx the parse tree
     */
    exitUuidSet?: (ctx: UuidSetContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xid`.
     * @param ctx the parse tree
     */
    enterXid?: (ctx: XidContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xid`.
     * @param ctx the parse tree
     */
    exitXid?: (ctx: XidContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.xuidStringId`.
     * @param ctx the parse tree
     */
    enterXuidStringId?: (ctx: XuidStringIdContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.xuidStringId`.
     * @param ctx the parse tree
     */
    exitXuidStringId?: (ctx: XuidStringIdContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.authPlugin`.
     * @param ctx the parse tree
     */
    enterAuthPlugin?: (ctx: AuthPluginContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.authPlugin`.
     * @param ctx the parse tree
     */
    exitAuthPlugin?: (ctx: AuthPluginContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.uid`.
     * @param ctx the parse tree
     */
    enterUid?: (ctx: UidContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.uid`.
     * @param ctx the parse tree
     */
    exitUid?: (ctx: UidContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.simpleId`.
     * @param ctx the parse tree
     */
    enterSimpleId?: (ctx: SimpleIdContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.simpleId`.
     * @param ctx the parse tree
     */
    exitSimpleId?: (ctx: SimpleIdContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dottedId`.
     * @param ctx the parse tree
     */
    enterDottedId?: (ctx: DottedIdContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dottedId`.
     * @param ctx the parse tree
     */
    exitDottedId?: (ctx: DottedIdContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.fileSizeLiteral`.
     * @param ctx the parse tree
     */
    enterFileSizeLiteral?: (ctx: FileSizeLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.fileSizeLiteral`.
     * @param ctx the parse tree
     */
    exitFileSizeLiteral?: (ctx: FileSizeLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.stringLiteral`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.stringLiteral`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.hexadecimalLiteral`.
     * @param ctx the parse tree
     */
    enterHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.hexadecimalLiteral`.
     * @param ctx the parse tree
     */
    exitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.nullNotnull`.
     * @param ctx the parse tree
     */
    enterNullNotnull?: (ctx: NullNotnullContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.nullNotnull`.
     * @param ctx the parse tree
     */
    exitNullNotnull?: (ctx: NullNotnullContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    enterDataType?: (ctx: DataTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dataType`.
     * @param ctx the parse tree
     */
    exitDataType?: (ctx: DataTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.collectionOptions`.
     * @param ctx the parse tree
     */
    enterCollectionOptions?: (ctx: CollectionOptionsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.collectionOptions`.
     * @param ctx the parse tree
     */
    exitCollectionOptions?: (ctx: CollectionOptionsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.convertedDataType`.
     * @param ctx the parse tree
     */
    enterConvertedDataType?: (ctx: ConvertedDataTypeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.convertedDataType`.
     * @param ctx the parse tree
     */
    exitConvertedDataType?: (ctx: ConvertedDataTypeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lengthTwoDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lengthTwoDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.uidList`.
     * @param ctx the parse tree
     */
    enterUidList?: (ctx: UidListContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.uidList`.
     * @param ctx the parse tree
     */
    exitUidList?: (ctx: UidListContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.tables`.
     * @param ctx the parse tree
     */
    enterTables?: (ctx: TablesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.tables`.
     * @param ctx the parse tree
     */
    exitTables?: (ctx: TablesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.indexColumnNames`.
     * @param ctx the parse tree
     */
    enterIndexColumnNames?: (ctx: IndexColumnNamesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.indexColumnNames`.
     * @param ctx the parse tree
     */
    exitIndexColumnNames?: (ctx: IndexColumnNamesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.expressions`.
     * @param ctx the parse tree
     */
    enterExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.expressions`.
     * @param ctx the parse tree
     */
    exitExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.expressionsWithDefaults`.
     * @param ctx the parse tree
     */
    enterExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.expressionsWithDefaults`.
     * @param ctx the parse tree
     */
    exitExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.constants`.
     * @param ctx the parse tree
     */
    enterConstants?: (ctx: ConstantsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.constants`.
     * @param ctx the parse tree
     */
    exitConstants?: (ctx: ConstantsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.simpleStrings`.
     * @param ctx the parse tree
     */
    enterSimpleStrings?: (ctx: SimpleStringsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.simpleStrings`.
     * @param ctx the parse tree
     */
    exitSimpleStrings?: (ctx: SimpleStringsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.userVariables`.
     * @param ctx the parse tree
     */
    enterUserVariables?: (ctx: UserVariablesContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.userVariables`.
     * @param ctx the parse tree
     */
    exitUserVariables?: (ctx: UserVariablesContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.currentTimestamp`.
     * @param ctx the parse tree
     */
    enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.currentTimestamp`.
     * @param ctx the parse tree
     */
    exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.orReplace`.
     * @param ctx the parse tree
     */
    enterOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.orReplace`.
     * @param ctx the parse tree
     */
    exitOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.waitNowaitClause`.
     * @param ctx the parse tree
     */
    enterWaitNowaitClause?: (ctx: WaitNowaitClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.waitNowaitClause`.
     * @param ctx the parse tree
     */
    exitWaitNowaitClause?: (ctx: WaitNowaitClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.lockOption`.
     * @param ctx the parse tree
     */
    enterLockOption?: (ctx: LockOptionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.lockOption`.
     * @param ctx the parse tree
     */
    exitLockOption?: (ctx: LockOptionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterSpecificFunction?: (ctx: SpecificFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitSpecificFunction?: (ctx: SpecificFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.caseFuncAlternative`.
     * @param ctx the parse tree
     */
    enterCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.caseFuncAlternative`.
     * @param ctx the parse tree
     */
    exitCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    enterLevelsInWeightString?: (ctx: LevelsInWeightStringContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    exitLevelsInWeightString?: (ctx: LevelsInWeightStringContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.levelInWeightListElement`.
     * @param ctx the parse tree
     */
    enterLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.levelInWeightListElement`.
     * @param ctx the parse tree
     */
    exitLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.aggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    enterAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.aggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    exitAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.nonAggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    enterNonAggregateWindowedFunction?: (ctx: NonAggregateWindowedFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.nonAggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    exitNonAggregateWindowedFunction?: (ctx: NonAggregateWindowedFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.overClause`.
     * @param ctx the parse tree
     */
    enterOverClause?: (ctx: OverClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.overClause`.
     * @param ctx the parse tree
     */
    exitOverClause?: (ctx: OverClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.windowName`.
     * @param ctx the parse tree
     */
    enterWindowName?: (ctx: WindowNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.windowName`.
     * @param ctx the parse tree
     */
    exitWindowName?: (ctx: WindowNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.frameClause`.
     * @param ctx the parse tree
     */
    enterFrameClause?: (ctx: FrameClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.frameClause`.
     * @param ctx the parse tree
     */
    exitFrameClause?: (ctx: FrameClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.frameUnits`.
     * @param ctx the parse tree
     */
    enterFrameUnits?: (ctx: FrameUnitsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.frameUnits`.
     * @param ctx the parse tree
     */
    exitFrameUnits?: (ctx: FrameUnitsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.frameExtent`.
     * @param ctx the parse tree
     */
    enterFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.frameExtent`.
     * @param ctx the parse tree
     */
    exitFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.frameBetween`.
     * @param ctx the parse tree
     */
    enterFrameBetween?: (ctx: FrameBetweenContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.frameBetween`.
     * @param ctx the parse tree
     */
    exitFrameBetween?: (ctx: FrameBetweenContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.frameRange`.
     * @param ctx the parse tree
     */
    enterFrameRange?: (ctx: FrameRangeContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.frameRange`.
     * @param ctx the parse tree
     */
    exitFrameRange?: (ctx: FrameRangeContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.partitionClause`.
     * @param ctx the parse tree
     */
    enterPartitionClause?: (ctx: PartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.partitionClause`.
     * @param ctx the parse tree
     */
    exitPartitionClause?: (ctx: PartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.scalarFunctionName`.
     * @param ctx the parse tree
     */
    enterScalarFunctionName?: (ctx: ScalarFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.scalarFunctionName`.
     * @param ctx the parse tree
     */
    exitScalarFunctionName?: (ctx: ScalarFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.passwordFunctionClause`.
     * @param ctx the parse tree
     */
    enterPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.passwordFunctionClause`.
     * @param ctx the parse tree
     */
    exitPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.functionArgs`.
     * @param ctx the parse tree
     */
    enterFunctionArgs?: (ctx: FunctionArgsContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.functionArgs`.
     * @param ctx the parse tree
     */
    exitFunctionArgs?: (ctx: FunctionArgsContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.functionArg`.
     * @param ctx the parse tree
     */
    enterFunctionArg?: (ctx: FunctionArgContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.functionArg`.
     * @param ctx the parse tree
     */
    exitFunctionArg?: (ctx: FunctionArgContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterExpressionAtom?: (ctx: ExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitExpressionAtom?: (ctx: ExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.unaryOperator`.
     * @param ctx the parse tree
     */
    enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.unaryOperator`.
     * @param ctx the parse tree
     */
    exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.logicalOperator`.
     * @param ctx the parse tree
     */
    enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.logicalOperator`.
     * @param ctx the parse tree
     */
    exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.bitOperator`.
     * @param ctx the parse tree
     */
    enterBitOperator?: (ctx: BitOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.bitOperator`.
     * @param ctx the parse tree
     */
    exitBitOperator?: (ctx: BitOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.mathOperator`.
     * @param ctx the parse tree
     */
    enterMathOperator?: (ctx: MathOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.mathOperator`.
     * @param ctx the parse tree
     */
    exitMathOperator?: (ctx: MathOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.jsonOperator`.
     * @param ctx the parse tree
     */
    enterJsonOperator?: (ctx: JsonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.jsonOperator`.
     * @param ctx the parse tree
     */
    exitJsonOperator?: (ctx: JsonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.charsetNameBase`.
     * @param ctx the parse tree
     */
    enterCharsetNameBase?: (ctx: CharsetNameBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.charsetNameBase`.
     * @param ctx the parse tree
     */
    exitCharsetNameBase?: (ctx: CharsetNameBaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.transactionLevelBase`.
     * @param ctx the parse tree
     */
    enterTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.transactionLevelBase`.
     * @param ctx the parse tree
     */
    exitTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.privilegesBase`.
     * @param ctx the parse tree
     */
    enterPrivilegesBase?: (ctx: PrivilegesBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.privilegesBase`.
     * @param ctx the parse tree
     */
    exitPrivilegesBase?: (ctx: PrivilegesBaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.intervalTypeBase`.
     * @param ctx the parse tree
     */
    enterIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.intervalTypeBase`.
     * @param ctx the parse tree
     */
    exitIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.dataTypeBase`.
     * @param ctx the parse tree
     */
    enterDataTypeBase?: (ctx: DataTypeBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.dataTypeBase`.
     * @param ctx the parse tree
     */
    exitDataTypeBase?: (ctx: DataTypeBaseContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.keywordsCanBeId`.
     * @param ctx the parse tree
     */
    enterKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.keywordsCanBeId`.
     * @param ctx the parse tree
     */
    exitKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => void;
    /**
     * Enter a parse tree produced by `MariaDBParser.functionNameBase`.
     * @param ctx the parse tree
     */
    enterFunctionNameBase?: (ctx: FunctionNameBaseContext) => void;
    /**
     * Exit a parse tree produced by `MariaDBParser.functionNameBase`.
     * @param ctx the parse tree
     */
    exitFunctionNameBase?: (ctx: FunctionNameBaseContext) => void;
}
