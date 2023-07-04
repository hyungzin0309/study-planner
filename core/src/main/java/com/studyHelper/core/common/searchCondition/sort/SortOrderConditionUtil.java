package com.studyHelper.core.common.searchCondition.sort;

import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.PathBuilder;
import java.util.Optional;

public class SortOrderConditionUtil {

    // Application 에서 정렬조건이 둘 이상인 경우가 없기 때문에 해당 Util 클래스를 사용한다.

    public static <T> Optional<OrderSpecifier<?>> orderCondition(SortCondition sortCondition, Class<T> type) {
        PathBuilder<T> entityPath = new PathBuilder<>(type, "entity");
        if (sortCondition.getDirection().equals(Direction.ASC)) {
            return Optional.of(entityPath.getString(sortCondition.getProperty()).asc());
        } else {
            return Optional.of(entityPath.getString(sortCondition.getProperty()).desc());
        }
    }

}
