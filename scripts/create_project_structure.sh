#!/bin/bash

if [ "$#" -eq 0 ]; then
    echo "Debe proporcionar al menos una entidad como argumento."
    exit 1
fi

mkdir -p src/lib/shared/{utils,components}
touch src/lib/shared/utils/index.ts
touch src/lib/shared/components/index.ts
touch src/lib/App.svelte

for entity in "$@"
do
    lower_case_entity=$(echo "$entity" | tr '[:upper:]' '[:lower:]')
    mkdir -p src/lib/features/$lower_case_entity/{domain/entities,domain/repositories,domain/use_cases,application/services,application/controllers,infrastructure/repositories,infrastructure/adapters,ui/components,ui/pages}

    touch src/lib/features/$lower_case_entity/domain/entities/$entity.ts
    touch src/lib/features/$lower_case_entity/domain/repositories/${entity}Repository.ts
    touch src/lib/features/$lower_case_entity/domain/use_cases/Create$entity.ts
    touch src/lib/features/$lower_case_entity/domain/use_cases/GetAll${entity}s.ts
    touch src/lib/features/$lower_case_entity/application/services/${entity}Service.ts
    touch src/lib/features/$lower_case_entity/application/controllers/${entity}Controller.ts
    touch src/lib/features/$lower_case_entity/infrastructure/repositories/LocalStorage${entity}Repository.ts
    touch src/lib/features/$lower_case_entity/infrastructure/repositories/Api${entity}Repository.ts
    touch src/lib/features/$lower_case_entity/ui/components/${entity}List.svelte
    touch src/lib/features/$lower_case_entity/ui/components/${entity}Details.svelte
    touch src/lib/features/$lower_case_entity/ui/pages/${entity}sPage.svelte
done
