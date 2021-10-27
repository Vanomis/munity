export interface Setting {
    key: string;
    valye: string;
}
export declare const settingSlice: import("@reduxjs/toolkit/query/react").Api<import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, {
    getSettings: import("@reduxjs/toolkit/query/react").QueryDefinition<void, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting[], string>;
    getSetting: import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting, string>;
    createSetting: import("@reduxjs/toolkit/query/react").MutationDefinition<Partial<Setting>, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting, "settings">;
    updateSetting: import("@reduxjs/toolkit/query/react").MutationDefinition<Partial<Setting> & Pick<Setting, "key">, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting, "settings">;
    deleteSetting: import("@reduxjs/toolkit/query/react").MutationDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", void, "settings">;
}, "settings", "Setting", typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useGetSettingsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<void, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting[], string>>, useGetSettingQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting, string>>, useDeleteSettingMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query/react").MutationDefinition<number, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", void, "settings">>, useUpdateSettingMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query/react").MutationDefinition<Partial<Setting> & Pick<Setting, "key">, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting, "settings">>, useCreateSettingMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query/react").MutationDefinition<Partial<Setting>, import("@reduxjs/toolkit/query/react").BaseQueryFn<string | import("@reduxjs/toolkit/query/react").FetchArgs, unknown, import("@reduxjs/toolkit/query/react").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query/react").FetchBaseQueryMeta>, "Setting", Setting, "settings">>;