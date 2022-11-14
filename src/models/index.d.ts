import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUntitledModel = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUntitledModel = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UntitledModel = LazyLoading extends LazyLoadingDisabled ? EagerUntitledModel : LazyUntitledModel

export declare const UntitledModel: (new (init: ModelInit<UntitledModel, UntitledModelMetaData>) => UntitledModel) & {
  copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}